const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const http = require('http');
const { Server } = require('socket.io');

require('./db.js');

const app = express();

app.name = 'API';

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

const serverApp = http.createServer(app);
const io = new Server(serverApp, {
	cors: {
		oirgin: '*'
	}
});

io.on('connection', (socket) => {
	console.log(socket.id);
	io.on('message', (message, name) => {});
});

app.use('/', routes);

// Error catching endware.
app.use((err, req, res, next) => {
	// eslint-disable-line no-unused-vars
	const status = err.status || 500;
	const message = err.message || err;
	console.error(err);
	res.status(status).send(message);
});

module.exports = serverApp;
