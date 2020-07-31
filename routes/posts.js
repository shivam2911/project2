const router = require("express").Router();
const mongoose = require("mongoose");

const Post = mongoose.model("register");
const New=mongoose.model("reg");


router.get("/", async (req, res) => {
    try {
        const post = await Post.find({})
        res.send(post)
    } catch (error) {
        res.status(500)
    }
});
/*

router.post("/", async (req, res) => {
    try {console.log(req.body)
    if(req.body._id){
        const post = await Post.findByIdAndUpdate({
            _id: req.body._id
        }, req.body, {
            new: true,
            runValidators: true
        });

        res.send(post)
    }
    else{
 
        const post = new Post();
        post.name = req.body.name;
        post.email = req.body.email;
        post.phone=req.body.phone;
        post.topic=req.body.topic;
        post.score=req.body.score;
        post.timePrefrence=req.body.timePrefrence;
        post.subscribe=req.body.subscribe;
        await post.save();
        res.send(post)

    }
}
      
     catch (error) {
        res.status(500)
    }

});*/
router.post("/", async (req, res) => {
    try {
        console.log(req.body)
        const post = new Post();
        post.name = req.body.name;
        post.email = req.body.email;
        post.phone=req.body.phone;
        post.topic=req.body.topic;
        post.score=req.body.score;
        post.timePrefrence=req.body.timePrefrence;
        post.subscribe=req.body.subscribe;
        await post.save();
        res.send(post)
    } catch (error) {
        res.status(500)
    }

})
router.get("/:postId", async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.postId })
        res.send(post)
    } catch (error) {
        res.status(500);
    }
});

router.put("/:postId", async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate({
            _id: req.params.postId
        }, req.body, {
            new: true,
            runValidators: true
        });

        res.send(post)

    } catch (error) {
        res.send(500)
    }
});

router.delete("/:postId", async (req, res) => {
  try {
      const post = await Post.findByIdAndRemove({
          _id: req.params.postId
      });
      res.send(post)

  } catch (error) {
      res.send(500)
  }
});


router.get("/graph/qwer",async(req,res)=>{
       try {
        const post = await New.find({})
        let arr=[]
        post.forEach(item=>{
          let obj={username:item.username,score:item.score}
          arr.push(obj)
        })
        
        res.send(arr);
    }
        catch (error) {
            res.send(500)
        }
    }          //res.status(500);
    
)

  

 
  module.exports = router;