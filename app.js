const express=require ('express');
const app=express();
app.get('/' ,function(req,res){
    res.send("<h1>hello</h1><br><table border=2><tr><th>Name:</th><th>Work:</th><th>id:</th></tr></table>"
    );
})
//app.get('/hello'),function(req,res){
//console.log("calling rest function");
//var person={firstName:'Manisha',lastName:"Singh"};
//res.send(person);
//}

app.listen(8000);
console.log("server is listening");