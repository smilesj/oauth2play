var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('step_all', { title: 'OAuth2 Playground' });
});

module.exports = router;

//깃 업로드 테스