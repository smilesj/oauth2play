var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.post('/', function(req, res) {

	//console.log('getAccessToken');
	//console.log(req.body);

	var grant_type = req.body.grant_type;
	var authcode = req.body.code;
	var client_id = req.body.client_id;
	var client_secret = req.body.client_secret;

	//var path = 'https://apis.daum.net/oauth2/token?grant_type='+grant_type+'&code='+authcode+'&client_id='+client_id+'&client_secret='+client_secret;
	//request(path, function(error, response, body){
	//	console.log(body.access_token);
	//});
	//access token 요청
	request( {
		method: 'POST',
		url: 'https://apis.daum.net/oauth2/token',
		data: {
			grant_type: grant_type,
			code: authcode,
			client_id: client_id,
			client_secret: client_secret,
		}
	}, function(err, response, body) {
		console.log('---');
		//var tmpToken = JSON.parse(body);
		//console.log("-----");
		//console.log("imhere");
		//var accessToken = tmpToken.access_token;
		//var refreshToken = tmpToken.refresh_token;
		//var json = JSON.stringify({
		//  accessToken : accessToken
		//});
		//res.writeHead(200, {'Content-Type' : 'application/json'});   
		//res.send(json);
		//res.render('step_all', { title: "TT" });
	});
});

module.exports = router;


