var express = require('express');
var router = express.Router();
var createError = require('http-errors');
/* GET home page. */
router.get('/', function(req, res, next){
  const users = [
    {
      name: '유시아',
      msg: '안녕 난 오마이걸 유시아!',
      age: 23
    },
    {
      name: '시오미',
      msg: '안녕 난 시오미!',
      age: 28
    }
  ]
  res.send({cards: users})

});

router.get('/greeting', function(req, res, next) {
  res.send({msg: '안녕하시렵니까!!!!'});
});

router.get('/memory', function(req, res, next) {
  res.send({msg: '5월13일'});
});

router.all('*', function(req, res, next) {
  next(createError(404, '그런 CARD-API 없다잉.!'));
});


module.exports = router;
