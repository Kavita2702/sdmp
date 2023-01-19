const express=require("express");
const app=express();

app.get("/",function(req,res){
    res.sendFile("./public/index.html",{root:__dirname});

});

app.listen(6789);
console.log("hello world");