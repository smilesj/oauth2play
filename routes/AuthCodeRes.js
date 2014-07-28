var express = require('express');
var router = express.Router();
var request = require('request');

var http = require('http');
var options = {
	host : 'https://apis.daum.net/oauth2/authorize?response_type=code&client_id=1234567890&&scope= ',
	port: 433,
	path: '/'
};

/*
var http=require('http');
var options={
        host:"172.16.12.5",
        port:3000,
        path:"/AuthUser",
        method: "POST"
};
var request=http.request(options,function(res){
        console.log('Get Status:',res.statusCode);
});
request.end();
*/
/*
var http = require('http');
var options={
        host:"www.google.com",
        port:3000,
        path:"/",
        method: "POST"
};
*/
/*
callback = function(response) {
	var str = '';

	response.on('data', function(chunk) {
		str += chunk + '\n';
	});

	response.on('end', function () {
		console.log("???" + str);
	});
}
http.request(options, callback).end();
*/

router.get('/', function(req, res) {
	/* Query값 갖고오기 */
	var authcode = req.query.code;
	var header_req = '';
	var header_res = '';

	// request url
	header_req += 'url : ' + req.url + '\n';
	header_req += 'method : ' + req.method + '\n';
	//request header 목록 출력
	for(var header in req.headers) {
		header_req += (header+ " : " + req.headers[header] + '\n');
	}

	header_res += 'qqqqqqq';
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