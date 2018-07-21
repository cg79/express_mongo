var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var book = require('./routes/book');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mern-secure', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
// app.use(express.static(path.join(__dirname, 'build')));



app.use('/api/book', book);

// app.use(function (req, res) {
// 	console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
//   res.end('OK');
// });


// Use middleware to set the default Content-Type
// app.use(function (req, res, next) {
// 	console.log('11111111111main----');
//     res.header('Content-Type', 'application/json');
//     next();
// });


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


//error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.send({error:err});
});


	

app.listen(3000, () => console.log('Example app listening on port 3000!'))
//module.exports = app;