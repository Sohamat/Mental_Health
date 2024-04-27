const express= require('express');
const app= express();
const path= require('path');
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname,'public')));
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

app.listen(3000,function(){
    console.log('Server is running on port 3000');
});
