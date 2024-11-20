const express = require("express");
var app = express();

// 1000-65536

app.listen(5000,() => {
    console.log("Server started on http://localhost:5000/users");
});

app.get("/", (req, res) => {
    
})

app.post("/", (req, res) => {

})

app.get("/users",(req, res) => {
    res.send("Hello world")
})

app.post("/users",(req, res) => {
    res.send("world")
})