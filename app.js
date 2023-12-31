var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()


const mongoDB = process.env.MONGODB_STRING
mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));
async function main(){
    await mongoose.connect(mongoDB)
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const authRouter = require('./routes/auth')
const scraperRouter = require('./routes/scrape')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter)
app.use('/scrape', scraperRouter)

module.exports = app;
