const express=require('express');
const app= express();
app.get('/',function(req,res){
    res.send("welcome to my park");
})
app.listen(5000,function(req,res){
    console.log("server running");
})
