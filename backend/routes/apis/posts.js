import express from "express";

import Post from "../../models/post";

const router = express.Router();

// Convert Mongo response to change id
const transform = (obj) => {
    const res = {
        id: obj._id,
        name: obj.name,
        url: obj.url,
        caption: obj.caption,
    };
    return res;
};

// @route   POST memes
// @desc    Post new post
// @access  Private
router.post("/", (req, res) => {
    const newPost = new Post({
        name: req.body.name,
        caption: req.body.caption,
        url: req.body.url,
    });

    Post.findOne({
        name: req.body.name,
        caption: req.body.caption,
        url: req.body.url,
    }).then((post) => {
        console.log(post);
        if (post != null) {
            res.status(409).json({ error: "Duplicate Post Found" });
        } else {
            newPost
                .save()
                .then((item) => res.status(200).json({ id: item._id }))
                .catch((err) =>
                    res.status(400).json({ error: "Post Failed : " + err })
                );
        }
    });
});

// @route   GET memes/:id
// @desc    Get post by id
// @access  Private
router.get("/:id", (req, res) => {
    Post.findOne({ _id: req.params.id })
        .then((post) => res.status(200).json(transform(post)))
        .catch((err) =>
            res.status(404).json({ error: "Post Not found : " + err })
        );
});

// @route   GET memes
// @desc    Get latest 100 posts
// @access  Private
router.get("/", (req, res) => {
    Post.find()
        .sort({ _id: -1 })
        .limit(100)
        .then((posts) => {
            let newPosts = posts.map((e) => transform(e));
            res.status(200).json(newPosts);
        })
        .catch((err) =>
            res.status(400).json({ error: "Some Error Occured : " + err })
        );
});

// @route   PATCH memes/:id
// @desc    Edit meme with id
// @access  Private
router.patch("/:id", (req, res) => {
    Post.updateOne({ _id: req.params.id }, req.body)
        .then((item) => {
            Post.findOne({ _id: req.params.id })
                .then((post) => {
                    res.status(200).json(transform(post));
                })
                .catch((err) =>
                    res.status(404).json({ error: "No Post Found : " + err })
                );
        })
        .catch((err) =>
            res.status(404).json({ error: "Post not Found : " + err })
        );
});

// @route   DELETE memes/:id
// @desc    Delete meme with id
// @access  Private
router.delete("/:id", (req, res) => {
    Post.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).json({ log: "Meme Deleted Successfully" });
        })
        .catch((err) => {
            res.status(400).json({ error: "Post Not found : " + err });
        });
});

export default router;
