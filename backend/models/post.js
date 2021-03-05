import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: String,
    caption: String,
    url: String,
});

export default mongoose.model("post", postSchema, "posts");
