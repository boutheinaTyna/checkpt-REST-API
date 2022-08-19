const express = require ('express');
const res = require('express/lib/response');
const mongoose = require ('mongoose');
const app = express();
const User = require('./models/User');
const connect = require ('./utils/connect');
const port = process.env.PORT ||5000;
require ("dotenv").config ();
// Connect your database locally or with mongo atlas
connect()

app.use(express.json());
const usersRouter = require ("./routes/users");
app.use ("/users", usersRouter)

//app.post("/api/user/register", async (req,res) => {
//    try {
//      console.log(req.body);
//      let {firstName,lastName,phoneNumber,email} = req.body;
//      const user = new User ({
//        firstName,
//        lastName,
//        phoneNumber,
//        email,
//      });
      
//      const newUser = await user.save();
//        res.status(200).json({
//            status:true,
//            message: "user created successfully",
//            data: newUser,
//        });
        
//     } catch (error) {
//        if (err) throw error ;
//        res.send(400).json ({status:false, error})
//        
//     }
// });


// lunch a server 
app.listen(5000, (err)=>{
    if (err) throw err
console.log(`server is runnig on http://localhost:${port}/`);
});

