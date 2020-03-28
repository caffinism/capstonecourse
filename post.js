var http=require('http');
var querystring=require('querystring');
var requestIp=require('request-ip');

var server=http.createServer(function(request, response){
	var postdata='';
	request.on('data', function(data){
		postdata=postdata+data;
	});

	request.on('end', function(){
		var parsedQuery=querystring.parse(postdata);
		console.log(parsedQuery);

		var moment=require('moment');
		require('moment-timezone');
		moment.tz.setDefault("Asia/Seoul");
		var time=moment().format('YYYY-MM-DD HH:MM:SS');
		ip=requestIp.getClientIp(request);
		ip=ip.substr(7);

		response.writeHead(200, {'Context-Type':'text/html'});
		response.end('{' + querystring.stringify(parsedQuery, ',',':') + ',\"email\":\"cjswoqkqhx@gmail.com\",\"stuno\":\"20151546\",\"time\":\"' + time + '\",\"ip\":\"' + ip + '\"}');
	});

});

server.listen(8000, function(){
	console.log('Server is running...');
});
