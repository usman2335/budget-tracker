const Expenses = require("../Models/expenses");

exports.createExpense = async (req, res) => {
  console.log("reached")
  try {
    const { expenseName, expensePrice, expenseDate} = req.body;
    const userId = req.user.id;
    console.log(userId);
    if (!userId) {
      return res.status(400).json({ message: "User ID is missing" });
    }
    // console.log(userId);
    const newExpense = new Expenses({
      expenseName,
      expensePrice,
      expenseDate,
      userId,
    });

    await newExpense.save();
    res
      .status(201)
      .json({ message: "Expense created successfully", newExpense });
  } catch (error) {
    console.error('Error creating expense:', error); 
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expenses.find().populate("userId", "email");
    if (expenses.length > 0) {
      res.status(200).json(expenses);
    } else {
      res.status(404).json({ message: "expenses not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const expenseId = req.params.expenseId;
    console.log("backend", expenseId);
    console.log(req.body);
    const updatedExpense = await Expenses.findByIdAndUpdate(
      expenseId,
      req.body,
      { new: true }
    );
    if (!updatedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    console.log(updatedExpense);
    res
      .status(200)
      .json({ message: "Expense updated successfully", updatedExpense });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const expenseId = req.params.expenseId;
    console.log(expenseId);
    const deletedExpense = await Expenses.findByIdAndDelete(expenseId);
    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json({ message: "Expense deleted successfully", updatedExpense });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
