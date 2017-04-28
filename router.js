function route(handler, pathname, res, req){
	if(typeof handler[pathname] === 'function'){
		handler[pathname](res, req);
	}else{
		res.writeHead(404, {"Content-Type":"text/html"});
		res.write("404 not found");
		res.end();
	}
}

exports.route = route;
