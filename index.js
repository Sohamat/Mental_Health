const express= require('express');
const app= express();
const path= require('path');
const patientModel=require('./models/Patient_Schema.module.js')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')))

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

app.listen(3000,function(){
    console.log('Server is running on port 3000');
});
