var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res) {
	/* Query값 갖고오기 */
	var authcode = req.query.code;
	var header_req = '';
	var header_res = '';
	console.log("RES =" + res.body);

	//request header 목록 출력
	for(var header in req.headers) {
		header_req += (header+ " : " + req.headers[header] + '\n');
	}

	//response header 목록 출력
	for(var header in res.headers) {
		header_res += (header+ " : " + res.headers[header] + '\n');
	}

	res.render('step_all', {
			title: 'OAuth2 Playground',
			value : "Authorization Code: " + authcode,
			header_req : header_req,
			header_res : header_res,
			authcode : authcode,
	});
});	

module.exports = router;