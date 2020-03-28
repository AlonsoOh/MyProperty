var http = require('http');
var url = require('url');
var moment = require('moment');
var fs = require('fs');
var querystring = require('querystring');

http.createServer(function(req, res){
	require('moment-timezone');
	moment.tz.setDefault("Asia/Seoul");
	var query = url.parse(req.url, true).query;
	var date = moment().format('YYYY-MM-DD HH:mm:ss');
	//var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
	var ip = (function (req) {
    		var ipaddr = require('ipaddr.js');
    		var ipString = (req.headers["X-Forwarded-For"] || req.headers["x-forwarded-for"] ||'').split(',')[0] ||req.connection.remoteAddress;

    		if (ipaddr.isValid(ipString)) {
        		try {
        	    		var addr = ipaddr.parse(ipString);
            			if (ipaddr.IPv6.isValid(ipString) && addr.isIPv4MappedAddress()) {
                			return addr.toIPv4Address().toString();
            			}
           			return addr.toNormalizedString();
        		} catch (e) {
            			return ipString;
        		}
    		}
    		return 'unknown';
	}(req));
	if(req.method == 'GET'){
		var str = {"email" : "jrboyosa1126@naver.com", "stuno" : "20141547"};
		var jsonObj = JSON.stringify(query);
		var obj = JSON.parse(jsonObj);
		obj.email = 'jrboyosa1126@naver.com';
		obj.stuno = '20141547';
		obj.time = date;
		obj.ip = ip;
		jsonObj = JSON.stringify(obj);
		res.writeHead(200 , {'Content-Type': 'text/html'});
		//res.end('<h1>'+JSON.stringify(query)+'</h1>');
		res.end(jsonObj);
	}
	else if(req.method == 'POST'){
		console.log(chunk.toString());
		var data = querystring.parse(chunk.toString());
		res.writeHead(200 , {'Content-Type': 'text/html'});
		res.end('id : ' + data.id + 'pwd : ' + data.pwd);
	}
}).listen(8000, function(){
	console.log('server running on 8000');
});
