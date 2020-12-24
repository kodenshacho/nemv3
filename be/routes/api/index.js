var express = require('express');
var router = express.Router();
var createError = require('http-errors');
/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.send({msg: 'hello api!!'});
});

router.use('/cards', require('./cards'));

router.all('*', function(req, res, next) {
  next(createError(404, '그런 API 없다잉.!'));
});


module.exports = router;
