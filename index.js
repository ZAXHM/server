var server = require('./server');
var router = require('./router');
var reqHandlers = require('./reqHandlers');

var handler = {};
handler["/"] = reqHandlers.hom;
handler["/hom"] = reqHandlers.hom;
handler["/upload"] = reqHandlers.upload;
handler["/show"] = reqHandlers.show;

server.start(router.route, handler);
