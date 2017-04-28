var http = require('http');
var _url = require('url');

var start = function(route, handler){
	function onRes(req, res){
		var pathname = _url.parse(req.url).pathname;
		route(handler, pathname, res, req);
	}
	
	http.createServer(onRes).listen(8000);
}

exports.start = start;

