var express = require('express');
var createError = require('http-errors');
var router = express.Router();


/* cards API. */
/* user-data */
const userData = [
  {
    name: '유시아',
    msg: '안녕 난 오마이걸 유아야!',
    age: 23
  },
  {
    name: '김지호',
    msg: '안녕 난 오마이걸 지호야!',
    age: 28
  },
  {
    name: '조동주',
    msg: '안녕 난 동꼬야!',
    age: 45
  }
]
router.get('/', function(req, res, next){
  console.log('req_query:' + req.query)
  console.log('req_body:' + req.body)
  res.send({cards: userData})

});
router.post('/', function(req, res, next){
  console.log('req_query:' + req.query)
  console.log('req_body:' + req.body)
  res.send({
    success: true, 
    msg: '포스트(등록) 오케!!'
  })
});
router.put('/', (req, res, next) => {
  console.log('req_query:' + req.query)
  console.log('req_body:' + req.body)
  res.send({
    success: true, 
    msg: '풋(수정) 오케!!'
  })  
});
router.delete('/', (req, res, next) => {
  console.log('req_query:' + req.query)
  console.log('req_body:' + req.body)
  res.send({
    success: true, 
    msg: '삭제 오케!!'
  })  
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
