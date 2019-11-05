
var express=require('express')
const app=express();
var cors=require('cors');
// const port=3000;


app.use(cors());
app.get('/fetchDetails',(req,res)=>{
    res.send([{"id":1,"name":"Mutton","Price":530,"Unit":"PerKg","Image":"../assets/Image/Mutton.jpg"},
    {"id":2,"name":"Chicken","Price":200,"Unit":"PerKg","Image":"../assets/Image/Chicken.jpg"},
    {"id":3,"name":"Potato","Price":30,"Unit":"PerKg","Image":"../assets/Image/Potato.jpg"},
    {"id":5,"name":"Onion","Price":50,"Unit":"PerKg","Image":"../assets/Image/Onion.jpg"},
    {"id":6,"name":"Egg","Price":30,"Unit":"Pack of Six","Image":"../assets/Image/Egg.jpg"},
    {"id":7,"name":"Tomato","Price":35,"Unit":"PerKg","Image":"../assets/Image/Tomato.jpg"},
    {"id":8,"name":"Banana","Price":40,"Unit":"PerKg","Image":"../assets/Image/Banana.jpg"}]);
   

    // res.send("welcome to page");

  });
  app.get('/',(req,res)=>
  {
    res.send("welcome to the default server apge");
  })

app.listen(3000,()=>
{
  console.log("server connected");
});



// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
