const express=require ('express');
const app=express();
app.get('/',function(req,res){
    res.send("Manisha Singh  address:raptinagar gorakhpur");
})
app.listen('7000',function(req,res){
    console.log("server is runing");
})