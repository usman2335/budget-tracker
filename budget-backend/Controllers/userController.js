const User = require('../Models/user');
const jwt = require('jsonwebtoken');

//endpoint for signup

exports.signup = async (req,res) =>{
    try{
        console.log(req.body);
        const {firstName, lastName, email, password, budget,role} = req.body;
    
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "Email already exists"});
        }
        const newUser = new User( {firstName, lastName, email, password, budget,role});
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
    
    exports.getAllUsers = async (req,res) =>{
        try {
            const users = await User.find()
            if (users.length > 0) {
              res.status(200).json(users);
            } else {
              res.status(404).json({ message: "users not found" });
            }
          } catch (error) {
            res.status(500).json({ message: "Server error", error });
          }
    }
    

    exports.deleteUser = async (req, res) => {
        try {
          const userId = req.params.userId;
          console.log(userId);
          const deletedUser = await User.findByIdAndDelete(userId);
          if (!deletedUser) {
            return res.status(404).json({ message: "Expense not found" });
          }
          res.status(200).json({ message: "User deleted successfully" });
        } catch (error) {
          res.status(500).json({ message: "Server error", error });
        }
      };