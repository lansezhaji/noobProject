var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'NoodProject' });
});

router.get('jiayou'){
  console.log(123)
}
module.exports = router;
