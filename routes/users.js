const res = require("express/lib/response");

const express = requuire ('express');
const router = express.Router;

//GET :  RETURN ALL USERS 
router.get ('/', async (req,res)=>{
    try {
        const user = await User.find() 
        res.json (users)

    } catch (error) {
        res.send(500).json ({message:err.message})
        
    }

});
//POST :  ADD A NEW USER TO THE DATABASE 
router.post ('/', async (req,res)=>{
    let {firstName,lastName,phoneNumber,email} = req.body;
      const user = new User ({
        firstName,
        lastName,
        phoneNumber,
        email,
      });
      try {
        const newUser = await user.save();
        res.status(201).json(newUser)
      } catch (error) {
        res.status(400).json({message:err.message})
          
      }
});

//PUT : EDIT A USER BY ID 
router.patch ('/:id', async , getUser, (req,res)=>{
    if (req.body.firstName != null){
        res.user.firstName = req.body.firstName
    }
    if (req.body.lastName != null){
        res.user.lastName = req.body.lastName
    }
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (error) {
        res.status(400).json({message:err.message})
    }
});

//DELETE : REMOVE A USER BY ID 
router.delete ('/:id', async, getUser, (req,res)=>{
    try {
        await res.user.remove()
        res.status(200).json({message: 'Deleted user'})
    } catch (error) {
        res.send(500).json({message:err.message})
    }

});
async function getUser (req,res,next){
    let user
    try {
        user = await user. findById(req.params.id)
        if (user == null) {
         return res.status(404).json({message:'cannot find user'})
        }
    } catch (error) {
         return res.status(500).json({message:err.message})
        
    }
    res.user = user 
    next()
};


module.exports = router