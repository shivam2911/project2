const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const cors = require('cors');

mongoose.connect("mongodb://localhost:27017/MyDbd",
    { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('mongodb connected')
    });

require("./model/Post");
require("./model/New");


const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/posts",require("./routes/posts"))

app.use("/news",require("./routes/news"))

app.listen(PORT,function(){
    console.log("Server runing on location:"+PORT);
});