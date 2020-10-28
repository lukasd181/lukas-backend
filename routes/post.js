var express = require('express');
var router = express.Router();
const postController = require("../controllers/post.controller")

/* GET users listing. */
router.get("/", postController.getPost);

router.post("/", postController.createPost);

module.exports = router;
