let http = require("http");
let express = require("express");
const bodyParser = require("body-parser");
// let connectDB= require("connectDB");

let app = express()
// const bodyParser = rewuire(bo)
app.use(bodyParser.json())

app.set("view engine" , "ejs")
//  get api ===
app.get("/getuser", (req, res) => {
    let arr = [
        {
            name: "yash",
            pass: "123"
        }
    ]
    res.status(200).json({
        message: " log in successfully",
        user: arr
    })
})

// get file ============
app.get("/", (req, res) => {
    console.log(req);
    res.sendFile(__dirname + "/index.html");
})


// post api ====
app.post("/add-data" ,(req ,res)=>{
console.log(req.body);
    let body = req.body
    try{
        res.status(201).json({
            message:"add data  lnelndlseccessfuly",
            user:body
        })
        res.render("index" , {body})
        // res.render(index)
    }catch(err){

    }
})

// http server ===
http.createServer(app).listen(3005,() => {
    console.log("server started");
});