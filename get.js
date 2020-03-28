var http=require('http');
var url=require('url');
var querystring=require('querystring');
var requestIp=require('request-ip');

var server=http.createServer(function(request, response){
	console.log('--- log start ---');
	var parsedUrl=url.parse(request.url);
	console.log(parsedUrl);
	var parsedQuery=querystring.parse(parsedUrl.query,'&','=');
	console.log(parsedQuery);
	console.log('--- log end ---');

	var moment=require('moment');
	require('moment-timezone');
	moment.tz.setDefault("Asia/Seoul");
	var time=moment().format('YYYY-MM-DD HH:MM:SS');
	ip=requestIp.getClientIp(request);
	ip=ip.substr(7);

	response.writeHead(200, {'Content-Type':'text/html'});
	response.end('{' + querystring.stringify(parsedQuery,',',':')  + ',\"email\":\"cjsqoqkqhx@gmail.com\",\"stuno\":\"20151546\",\"time\":\"' + time +'\",\"ip\":\"' + ip  + '\"}');
});

server.listen(8000, function(){
	console.log('Server is running on 8000 port...');
});
