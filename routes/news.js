const router = require("express").Router();
const mongoose = require("mongoose");
const New = mongoose.model("reg");
a=[]
router.get("/", async (req, res) => {
    try {
        const post = await New.find({})
        a=post;
        console.log(a)
        res.send(post)
        
    } catch (error) {
        res.status(500)
    }
});
router.post("/", async (req, res) => {
    try {console.log(req.body)
        const post = new New();
        post.username = req.body.username;
        post.score=req.body.score;
        post.password = req.body.password;
        
        await post.save();
        res.send(post)
    } catch (error) {
        res.status(500)
    }

})
router.get("/:newId", async (req, res) => {
    try {
        const post = await New.findOne({ _id: req.params.newId })
        res.send(post)
    } catch (error) {
        res.status(500);
    }
    router.put("/:newId", async (req, res) => {
        try {
            const post = await New.findByIdAndUpdate({
                _id: req.params.newId
            }, req.body, {
                new: true,
                runValidators: true
            });
    
            res.send(post)
    
        } catch (error) {
            res.send(500)
        }
    });
    router.delete("/:newId", async (req, res) => {
        try {
            const post = await New.findByIdAndRemove({
                _id: req.params.newId
            });
            res.send(post)
      
        } catch (error) {
            res.send(500)
        }
      })
});
module.exports = router;