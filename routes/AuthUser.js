var express = require('express');
var router = express.Router();
var request = require('request');

/* Post users listing. */
router.post('/', function(req, res) {
  //Parameters
  var response_type = "code";
  var client_id = "1234567890";
  var redirect_uri = "http://172.16.12.5:3000/AuthCodeRes";

  //Header Parsing
  var Hhost = req.headers['host'];
  var Hconnection = req.headers['connection'];
  var Haccept = req.headers['accept'];
  var Huser_agent = req.headers['user-agent'];
  var Hae = req.headers['accept-encoding'];
  var Hal = req.headers['accept-language'];
  var Hco = req.headers['cookie'];

  //response_type, client_id, redirect_uri 모두 전송하기
  var check_all = req.body.check_all;
  var check_profile = req.body.check_profile;
  var check_blog = req.body.check_blog;
  var check_calendar = req.body.check_calendar;
  var check_cafe = req.body.check_cafe;
  
  var scope='';

  if(check_all == 'on')
  {
    scope ='';
    //res.cookie('check_all',check_all);
  }
  else
  {
    if(check_profile == 'on') { 
      scope += 'user ';
      //res.cookie('check_profile',check_profile);
    }
    if(check_blog == 'on') {
      scope += 'blog ';
      //res.cookie('check_blog',check_blog);
    }
    if(check_calendar == 'on') {
      scope += 'calendar ';
      //res.cookie('check_calendar',check_calendar);
    }
    if(check_cafe == 'on') {
      scope += 'cafe ';
      //res.cookie('check_cafe',check_cafe);
    }
  }

//res.cookie('check_all',check_all);
//res.cookie('check_profile',check_profile);
//res.cookie('check_blog',check_blog);
//res.cookie('check_calendar',check_calendar);
//res.cookie('check_cafe',check_cafe);

  var AuthorizeURL = 'https://apis.daum.net/oauth2/authorize?response_type=' + response_type + '&client_id=' + client_id + '&redirect_uri=' + redirect_uri + '&scope=' + scope;
  res.redirect(AuthorizeURL);
});

module.exports = router;