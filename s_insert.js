mysql = require('mysql');
var RSS = "http://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=4113552000";

// 모듈 로드
var parseString = require('xml2js').parseString;
var request = require('request');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'mypassword',
    database: 'mydb'
})
connection.connect();

request(RSS, function (err, response, body) {
	if (!err && response.statusCode == 200) {
        	setInterval(analyzeRSS, 600000, body);
    	}
});

r={};
r.seq=1;
r.type='T';
r.device='102';
r.unit='0';
r.ip="192.168.0.2";
r.value=10.9;

function analyzeRSS(xml) {
    // XML을 JS 오브젝트로 변환
    parseString(xml, function (err, obj) {
        if (err) {
            console.log(err);
            return;
        }
        // 기상 예보 정보 출력 ----- (※3)
        var temp = obj.rss.channel[0].item[0].description[0].body[0].data[0].temp;
	    console.log(temp);
        var query = connection.query("insert into sensors (seq, type, device, unit, ip, value) values (1, 'T', '102', '0', ?, ?)", [r.ip, temp], function(err, rows, cols) {
        if (err) throw err;
        console.log("done");
       
    });
});
}
