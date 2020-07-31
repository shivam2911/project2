const mongoose = require("mongoose");

const post_schema =new mongoose.Schema({
    name: {
        type: String,
        required: "Title is required"                                                
    
    },
    email: {
        type: String,
        required: "content is required"
    },
    phone:{
        type:Number,
        required:"content is required"
    },
    topic:{
        type:String,
        required:"content is required"
    },
    timePrefrence:{
      type:String,
      required:"content is required"


    },
    score:{
      type:Number,
      required:"content is required"
    },
    subscribe:{
        type:Boolean,
        required:"content is required"}
})

module.exports = mongoose.model("register", post_schema)