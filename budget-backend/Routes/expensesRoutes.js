const express = require('express');
const router = express.Router();
const expensesController = require('../Controllers/expensesController');
const authMiddleware = require('../Middleware/auth')



router.post('/api/expense',authMiddleware, expensesController.createExpense);
router.get('/get-expenses',expensesController.getAllExpenses);
router.put('/update-expense/:expenseId',expensesController.updateExpense);
router.put('/delete-expense/:expenseId',expensesController.deleteExpense);

module.exports = router;
