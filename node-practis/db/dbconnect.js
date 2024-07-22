let mongoose = require("mongoose");

let connectDB =()=>{
    connect("mongoose://mongodb://localhost:27017").then(()=>{
    console.log("database add successfuly");
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports =connectDB