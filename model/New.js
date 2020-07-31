const mongoose = require("mongoose");
const new_schema =new mongoose.Schema({
    username: {
        type: String,
        required: "Title is required"                                                
    
    },
    score:{
        type:Number,
        required:"content is required"
      },
    password: {
        type: Number,
        required: "content is required"
    }})
   module.exports = mongoose.model("reg", new_schema)