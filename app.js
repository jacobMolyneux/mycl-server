var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')

const mongoDB = 'mongodb+srv://jacobmolyneux2:Pigpen123@cluster0.3f83wgs.mongodb.net/?retryWrites=true&w=majority'
mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));
async function main(){
    await mongoose.connect(mongoDB)
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const authRouter = require('./routes/auth')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter)

module.exports = app;
