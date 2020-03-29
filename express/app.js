var express = require("express");
var app = express();	
var server = require("http").createServer(app);
server.listen(8080);

app.get("/", function(req,res){
	res.send("<font color=red>Hello world</font>");
});