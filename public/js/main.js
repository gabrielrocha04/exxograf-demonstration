const express = require("express");
const app = express();
const path = require("path");

const htmlPath = path.join(__dirname, "../html")

app.use(express.static(htmlPath))
app.use(express.static("public"))

app.get("/", (req,res)=>{ 
    const filePath = path.join(__dirname, "../html/index.html")
    res.sendFile(filePath);
})

app.listen(8000);