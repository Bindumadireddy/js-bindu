var express=require('express');
var path=require("path")
var app=express();
app.use(express.static("public"))
app.get("/",function(req,res)
{
	res.sendFile(path.join(__dirname,"public/index.html"))
})
app.get("/contact",function(req,res)
{
	res.sendFile(path.join(__dirname,"public/contact.html"))
})
app.listen(8000,function(){
	console.log("Server is started")
})
