var express = require("express");

var port = process.env.PORT || 1339;
var app = express();

app.get('/', function(req, res){
	res.write('bizglue/qbo');
	res.end();
});

app.listen(port, function(){
	console.log('Example app listening on port' + port);
});
