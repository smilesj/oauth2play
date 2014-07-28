var express = require('express');
var router = express.Router();
var request = require('request');

var header_res = '';
var r = request.get('https://apis.daum.net/oauth2/authorize?response_type=code&client_id=1234567890&&scope= ', function(err, res, body) {

	//header_res += res.uri.href;
	for(var header in res.headers) {
		header_res += (header+ " : " + res.headers[header] + '\n');
	}
});

router.get('/', function(req, res) {
	/* Query값 갖고오기 */
	var authcode = req.query.code;
	var oauth_parameter = '';
	var header_req = '';

	//oauth parameter


	// request url, method
	header_req += 'url : ' + req.url + '\n';
	header_req += 'method : ' + req.method + '\n';
	//request header 목록 출력
	for(var header in req.headers) {
		header_req += (header+ " : " + req.headers[header] + '\n');
	}

	res.render('step_all', {
			title: 'OAuth2 Playground',
			value : "Authorization Code: " + authcode,
			oauth_parameter : oauth_parameter,
			header_req : header_req,
			header_res : header_res,
			authcode : authcode,
	});
});	

module.exports = router;