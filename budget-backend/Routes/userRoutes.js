const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const expensesController = require('../Controllers/expensesController');

router.post('/signup',userController.signup);
router.post('/login',userController.login);
router.get('/users', userController.getAllUsers);
router.delete('/delete-user/:userId', userController.deleteUser);


module.exports = router;
