const express= require('express');
const app= express();
const cookieParser = require("cookie-parser")
const path= require('path');
const User = require('./models/user.module')
app.use(cookieParser())
const jwt = require("jsonwebtoken")
const fs= require('fs');
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render("index")
})
app.get('/about',function(req,res){
    res.render("About")
})
app.get('/contact',function(req,res){
    res.render("Contact")
})
app.get('/BookSession',function(req,res){
    res.render("BookSession")
})
app.get('/profile',function(req,res){
    res.render("Profile")
})
app.post('/register',async function(req,res){
    // const userdata={
    //     name: req.body.name,
    //     age: req.body.age,
    //     email: req.body.email
    // }
    const {name , email , password} = req.body;

    const user = await User.create({
        name , email , password
    })

    const token = user.getJWTToken();

    const options = {
        expires : new Date(
            Date.now()+2*24*60*60*1000
) , 
httpOnly : true ,
    } ;

    res.status(200).cookie('token' , token , options)
     


})


app.post('/login' , async (req , res , next)=>{

    const {email, password} = req.body;

    const user  = await User.findOne({
        email
    }).select("+password");

    const isPasswordMatched = user.comparePassoword(password);

    const token = user.getJWTToken();

    const options = {
        expires : new Date(
            Date.now()+2*24*60*60*1000
) , 
httpOnly : true ,
    } ;

    res.status(200).cookie('token' , token , options)

})
app.get('/register',function(req,res){
    res.render("Register")
});
app.post ('/test' , async (req , res , next)=>{
    const qno_arr = [2, 3, 5, 7, 9];
const checkboxwt = [10, 8, 5, 3];
let sum = 0;


    const {token} = req.cookies

    const decodedData = jwt.verify(token , "wlrng;ksfb kfvj sfugbRWUOBVOSV");


    const user = await User.findById(decodedData.id)
for (let i = 0; i < 5; i++) {
    let qwt = qno_arr[i];
    let selectedOption = parseInt(req.body[`q${i + 1}`], 10); // Convert to number
    sum += qwt * checkboxwt[selectedOption - 1];
}

    user.risk = sum ;

})
app.get('/stressmanager',function(req,res){
    res.render("stressManagement")
})

app.get('/doctor',function(req,res){
    res.render("doctorCard")
})

app.get('/testinput',function(req,res){
    res.render("TestInput")
})

app.listen(5000,function(){
    console.log('Server is running on port 5000');
});












