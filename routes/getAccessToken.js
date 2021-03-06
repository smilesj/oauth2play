var express = require('express');
var router = express.Router();
var request = require('request');
var url = require('url');

var header_res = '';
var r = request.get('https://apis.daum.net/oauth2/token', function(err, res, body) {
	//for(var header in res.headers) {
	//	header_res += (header+ " : " + res.headers[header] + '\n');
	//}
	header_res = res.headers;
});

/* GET users listing. */
router.post('/', function(req, res) {

	var grant_type = req.body.grant_type;
	var authcode = req.body.code;
	var client_id = req.body.client_id;
	var client_secret = req.body.client_secret;
	var header_req = req.headers;
	//console.log("GETACCESSTOKEN-HEADER");
	//console.log(header_req);
	var oauth_parameter = '';
	var parameter = {
		grant_type : grant_type,
		code: authcode,
		client_id: client_id,
		client_secret: client_secret,
		redirect_uri : '/'
	};	
	oauth_parameter = JSON.stringify(parameter, null, 4);

	//access token 요청
	request( {
		method: 'POST',
		url: 'https://apis.daum.net/oauth2/token',
		form: {
			grant_type: grant_type,
			code: authcode,
			client_id: client_id,
			client_secret: client_secret,
			redirect_uri : '/'
		}
	}, function(err, response, body) {
		//console.log('QUERY');
		//console.log(response);
		var token = JSON.parse(body);
		var value = {"oauth_parameter":oauth_parameter,"header_res":header_res, "header_req":header_req, "token": token};
		res.send(JSON.stringify(value));
	});
});

module.exports = router;


