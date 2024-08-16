const mongoose = require('mongoose')

const expensesSchema = new mongoose.Schema({
    expenseName: {type: String, required: true, unique: false},
    expensePrice: {type: Number, required: true, unique: false},
    expenseDate: {type: Date, required: true, unique: false},
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true 
    }

})

const Expenses = mongoose.model('Expenses',expensesSchema);
module.exports = Expenses;