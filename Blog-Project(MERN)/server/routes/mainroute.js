const express=require('express');
const route=express.Router();
const checkAuth = require('../middlewares/check-auth');
const User=require('../model/user');
const Blog = require('../model/postmodel'); 

//Register route
route.post("/register",(req,res)=>{
    let register=new User(req.body)
   register.save()
    .then((err,docs)=>{
        if(err)
        res.send(err)
        else
        res.send("Succesfully Register");
    })
})

// router.use(checkAuth);

route.post("/login",(req,res)=>{
    User.findOne({email:req.body.email})
    .then(found=>{
        if(found.password==req.body.password)
            res.send("1")
        else{
            res.send("0")
        }
    })
    .catch(err=>res.send("user not found"))
})

//post retrival route
route.get('/posts',(req,res)=>{
    Blog.find((err,data)=>{
        if(err)
        res.json(err)
        else
        res.json(data)
    })
})

//Add post route
route.post('/add-post',(req,res)=>{
    let adding = new Blog(req.body)
    adding.save((err,docs)=>{
        if(err)
        res.json("Try again!!")
        else    
        res.json("Congrats! Post has been added");
    })
})

module.exports=route;