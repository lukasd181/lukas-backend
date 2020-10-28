var express = require('express');
require("dotenv").config();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI;
mongoose
  .connect(mongoURI, {
    // some options to deal with deprecated warning
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Mongoose connected to ${mongoURI}`);
    // require("./testing/testSchema");
  })
  .catch((err) => console.log(err));

const db = mongoose.connection;

db.once("open", function () {
  console.log("MongoDB database connection established successfully!");
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const postRouter = require("./routes/post")

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/post", postRouter);

module.exports = app;
