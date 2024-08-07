const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer')
const path = require('path');
const cors = require('cors');

const User = require('./Models/user'); 

app.use(express.json());
app.use(cors());

//DB connection

mongoose.connect("mongodb+srv://usman2335:budgetdb@cluster0.3nmo5.mongodb.net/budget-tracker");

//API
app.get("/",(req,res)=>{
    res.send("Express app is running")
})

//endpoint for signup

app.post('/signup',async (req,res) =>{
try{
    const {firstName, lastName, email, password, budget} = req.body;

    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message: "Email already exists"});
    }
    const newUser = new User( {firstName, lastName, email, password, budget});
    await newUser.save();

    const data = {
        user: {
            id: newUser.id
        }
    }
    const token = jwt.sign(data, 'secret_budget');
    res.json({success: true,token})

    // res.status(201).json({message: "User created successfully"});

}
catch(error){
    res.status(500).json({message: "Server error",error})
}
    
})

//endpoint for login

app.post('/login', async (req,res) =>{
    const user = await User.findOne({email : req.body.email});
    if(user)
    {
        const passCheck = req.body.password === user.password;
        if(passCheck)
        {
            const data = {
                user:{
                    id: user.id
                }
            }
            const token = jwt.sign(data,'secret_budget');
            res.json({success: true,  token});
        }
        else
        {
            res.json({success: false, error: "Wrong password"});
        }

    }
    else
    {
        res.json({success: false, error: "User does not exist"})
    }
})

app.listen(port, (error) =>
{
    if(!error){
        console.log(`Express running on port ${port}`);
    }
    else{
        console.log(`Error: ${error}`);
    }
})