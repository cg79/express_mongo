import express from 'express'
var router = express.Router();

import userService from '../services/user/user-service';

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };


router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  
  res.body = function(body) {
  	console.log(body);
  	res.send({data:body});
  }
 	 next();
})

router.get('/', function(req, res, next) {
  res.body({a:2});
});

router.get('/addUser', asyncMiddleware(async (req, res, next) => {
  const response = await userService.addUser();
  res.body(response);
}));

module.exports = router;