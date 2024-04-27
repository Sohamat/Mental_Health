const express= require('express');
const app= express();
const path= require('path');
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname,'public')));
const fs= require('fs');
app.set('view engine','ejs');

app.get('/',function(req,res){
    fs.readdir('./files',function(err,files){
        res.render("index",{files:files});
    })
   
})
app.get('/file/:filename',function(req,res){
fs.readFile(`./file/${req.params.filename}`, "UTF-8" ,function(err,filedata){
    console.log(filedata );
    res.render("show",{filename:req.params.filename,filedata:filedata});
    
})

app.get('/edit/:filename',function(req,res){
    res.render('edit',{filename:req.params.filename});

})

})
app.post('/create',function(req,res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,function(err){
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/');
        }
    })
})
app.listen(3000,function(){
    console.log('Server is running on port 3000');
});
