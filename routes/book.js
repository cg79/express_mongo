var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  
  res.body = function(body) {
  	console.log(body);
  	res.send(body);
  }
  
  next();
})

router.get('/', function(req, res, next) {
  res.body({a:2});
});

module.exports = router;