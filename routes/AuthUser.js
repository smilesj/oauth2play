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
  
  /*
  function sendPost('/AuthCode_res', response_type){
    var form=document.createElement("form");
    form.name='tempPost';
    form.method='post';
    form.action='/AuthCode_res';

    var input = document.createElement("input");
    input.type="hidden";
    input.name='json';
    input.value=jQuery.JSONToString(response_type);
    $(form).append(input);
    $('#body').append(form);
    form.submit();
  }
  */

  var check_all = req.body.check_all;
  var check_profile = req.body.check_profile;
  var check_blog = req.body.check_blog;
  var check_calendar = req.body.check_calendar;
  var check_cafe = req.body.check_cafe;
  
  var scope='';

  if(check_all == 'on')
  {
    scope ='';
  }
  else
  {
    if(check_profile == 'on')
      scope += 'user ';
    if(check_blog == 'on')
      scope += 'blog ';
    if(check_calendar == 'on')
      scope += 'calendar ';
    if(check_cafe == 'on')
      scope += 'cafe ';
  }

  var AuthorizeURL = 'https://apis.daum.net/oauth2/authorize?response_type=' + response_type + '&client_id=' + client_id + '&redirect_uri=' + redirect_uri + '&scope=' + scope;
  res.redirect(AuthorizeURL);


/*
  request( {
    method: 'POST',
    url: 'https://apis.daum.net/oauth2/authorize',
    form: {
      response_type: response_type,
      client_id: client_id,
      redirect_uri: redirect_uri,
      scope : scope,
    }
  }, function(err, response, body) {
    console.log('Authorize');
    console.log(response);
    res.redirect(redirect_uri);
  });
*/
});

module.exports = router;