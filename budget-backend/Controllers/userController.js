const User = require('../Models/user');
const jwt = require('jsonwebtoken');

//endpoint for signup

exports.signup = async (req,res) =>{
    try{
        console.log(req.body);
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
        
    }
    
    //endpoint for login
    
    exports.login = async (req,res) =>{
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
    }
    
    