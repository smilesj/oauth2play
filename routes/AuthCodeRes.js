var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res) {
	/* Query값 갖고오기 */
	var authcode = req.query.code;

	//res.send(authcode);

	//session 사용하지 않도록 코드 만들기**************
	//req.session.authcode = authcode;

	//헤더파일 파싱. 이 부분 승철님이 반복문으로 해결하는 부분으로 바꾸기
	var Hhost = req.headers['host'];
	var Hconnection = req.headers['connection'];
	var Haccept = req.headers['accept'];
	var Huser_agent = req.headers['user-agent'];
	var Hae = req.headers['accept-encoding'];
	var Hal = req.headers['accept-language'];
	var Hco = req.headers['cookie'];

	console.log('Req 헤더파일');
	console.log(req.headers);

	console.log('Res 헤더파일');
	console.log(res.headers);

	res.render('step_all', {
			title: 'OAuth2 Playground',
			value : "Authorization Code: " + authcode,
			Hh : "Host: " + Hhost,
			Hcon : "connection: " + Hconnection,
			Hac : "accept: " + Haccept,
			Huser : "user-agent: " + Huser_agent,
			Hae : "accept-encoding: " + Hae,
			Hal : "accept-language: " + Hal,
			Hco : "Cookie: " + Hco,
			authcode : authcode,
	});
});	

module.exports = router;