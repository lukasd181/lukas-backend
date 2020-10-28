const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = Schema(
  {
    username: { type: String, required: true },
    avatarUrl: { type: String, required: false },
    location: { type: "String", required: false },
    caption: { type: String, required: true },
    likeCount: { type: Number, dafault: 0 },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
