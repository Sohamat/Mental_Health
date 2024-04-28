const express= require('express');
const app= express();
const cookieParser = require("cookie-parser")
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
app.get('/community',function(req,res){
    res.render("Community")
})
app.post('/register',function(req,res){
    const userdata={
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    }
})

app.post ('/test' , (req , res , next)=>{

    console.log(req.body);
const qno_arr = [2, 3, 5, 7, 9];
const checkboxwt = [10, 8, 5, 3];
let sum = 0;

for (let i = 0; i < 5; i++) {
    let qwt = qno_arr[i];
    console.log('qwt = '+qwt)
    let selectedOption = parseInt(req.body[`q${i + 1}`], 10); // Convert to number
    console.log('so'+selectedOption)
    sum += qwt * checkboxwt[selectedOption - 1];
}
res.send(sum)
res.redirect("/detail")
})

app.get('/register',function(req,res){
    res.render("RegisterUser")
});

app.get('/login',function(req,res){
    res.render("LoginUser")
});
app.post ('/test' , async (req , res , next)=>{
    const qno_arr = [8,7,9,10,9,8,7,6,10,8];
    const checkboxwt = [15, 12, 10, 8 , 6];
    let sum = 0;

    const { token } = req.cookies;

    const decodedData = await jwt.verify(token, "wlrng;ksfb kfvj sfugbRWUOBVOSV");

    const user = await User.findById(decodedData.id);
    for (let i = 0; i < 5; i++) {
        let qwt = qno_arr[i];
        console.log('qwt = ' + qwt);
        let selectedOption = parseInt(req.body[`q${i + 1}`], 10); // Convert to number
        console.log('so' + selectedOption);
        sum += qwt * checkboxwt[selectedOption - 1];
    }

    // Round off the sum to no decimal places
    const roundedSum = Math.round(sum / 6.5);
    if(roundedSum < 30) roundedSum = 30;
    user.risk = roundedSum;

    user.save();
    console.log(user.risk);
    res.render("Details", { user });

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



app.post('/testinput',function(req,res){
    if(req.body!=null){
        res.redirect("/detailpage");
    }
    else {
        res.redirect("/testinput")
    }
})
//data input 
app.get('/detailpage',function(req,res){
    res.render("Details")
})
app.get('/community',function(req,res){
    res.render("Community")
})

app.get('/profileDetails',function(req,res){
    res.render("ProfileDetails")
})

app.get('/profileDetails',function(req,res){
    res.render("ProfileDetails")
})

app.listen(5000,function(){
    console.log('Server is running on port 5000');
});












