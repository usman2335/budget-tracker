const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const port = 4000;

const userRoutes = require('./Routes/userRoutes');

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/', userRoutes);
//DB connection

mongoose.connect("mongodb+srv://usman2335:budgetdb@cluster0.3nmo5.mongodb.net/budget-tracker");

//API
app.get("/",(req,res)=>{
    res.send("Express app is running")
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

