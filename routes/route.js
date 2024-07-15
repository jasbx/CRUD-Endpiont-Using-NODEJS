const express = require('express')

const route = express.Router();
const User = require('../models/Users')

//URL GET DATA
route.get('/users', async (req, res) => {
 try {
    const users = await User.find();
    res.json(users)
 } catch (error) {
    res.status(400).json({msg: 'Invalid user data'})
 }
})
//URL POST DATA
route.post('/new/users', async (req, res) => {
try{
    const {username,email} = req.body
    const users = new User({username,email})
    await users.save()
    res.json(users)
}catch(error){
    res.status(400).json({msg: 'Invalid user data'})
}

})


// GET BY ID

route.get('/users/:id', async(req,res)=>{
    try {
        
    const user = await User.findById(req.params.id);
    res.json(user);
    } catch (error) {
        res.status(400).json({msg: 'Invalid user data'})
    }
})
// Delete url



route.delete('/delete/user/:id',(req,res)=>{
   try {
     User.findByIdAndDelete(req.params.id)
    .then(()=>res.json({success: 'deleted Done !'}))
   } catch (error) {
    res.status(400).json({msg: 'Invalid user data'})
   }
})


//update url


route.put('/update/user/:id', async (req, res) => {
    try {
        const { username, email } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { username, email },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


module.exports = route;