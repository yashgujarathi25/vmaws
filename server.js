const express = require("express");
var app = express();

app.get("/",(req,resp)=>{
    resp.send("<h1>Helllo World</h1>")
});

app.listen(3000);
console.log("Server is running on port no 3000");