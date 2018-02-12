(() => {
	const ENV = process.env.NODE_ENV || 'development';
	let express = require('express'),
	cluster = require('cluster'),
	moment = require('moment'),
	app = express(),
	bodyParser = require('body-parser'),
	socket_io = require("socket.io"),
	fs = require('fs'),
	compression = require('compression'),
	morgan = require("morgan"),
	jwt = require("jsonwebtoken"),
	http = require("http");
	let io = socket_io();
	let
		address
		, os = require('os')
		, ifaces = os.networkInterfaces();

for (var dev in ifaces) {

	let iface = ifaces[dev].filter(function(details) {
		return details.family === 'IPv4' && details.internal === false;
	});

	if (iface.length > 0)
		address = iface[0].address;
}
if (typeof address == 'undefined') {
	address = '127.0.0.1';
}

module.exports = (appdir,config, cb) => {
	app.dir = appdir;


	app.use((req, res, next) => { 
	  if (config.debug) {
	  	console.log(moment().format('HH:MM'), req.method, req.url,
	  		req.socket.bytesRead, 'process:', process.pid);	  	
	  }
	  next();
	});

	app.use((err, req, res, next) => { 
		console.error(err.stack);
		res.status(500).send('Something broke!');
		next();
	});

	app.use(bodyParser.json());

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	if (config.debug) {
		app.use(morgan("dev"));	
	}


app.set('views', __dirname + '/../views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

let oneYear = 365 * 86400000;
app.use(express.static(__dirname + '/../public', {maxAge: oneYear}));
app.set('ipaddr', address);
app.set('port', config.porthttp);

require('../routers')(app, express, io);
var server = http.createServer(app);

io.attach(server);

server.on('listening', function(){
	console.log('Server running at '+ (config.https?'https':'http')+'://' + app.get('ipaddr') + ':' + app.get('port'));
});
cb(server);
};
})();
