const express= require('express');
const app= express();
const path= require('path');
 

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
app.post('/register',function(req,res){
    const userdata={
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    }
})
app.get('/register',function(req,res){
    res.render("Register")
});

app.get('/stressmanager',function(req,res){
    res.render("stressManagement")
})

app.get('/doctor',function(req,res){
    res.render("doctorCard")
})

app.get('/testinput',function(req,res){
    res.render("TestInput")
})

app.listen(3000,function(){
    console.log('Server is running on port 3000');
});
