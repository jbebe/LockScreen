const WebSocket = require('ws');
const http = require('http');
const express = require('express');

const app = express();
app.use(express.static('.'))
const server = http.createServer(app);

const port = 80;
const wss = new WebSocket.Server({ server });

let lockableDesktop = null;

wss.on('connection', (ws, req) => {
	console.log(`Someone connected from ${req.connection.remoteAddress}`);

	ws.on('message', (data) => {
		if (data == 'desktop'){
			console.log('Desktop logged in.');
			lockableDesktop = ws;
			return;
		}
		
		console.log('Sending ping to desktop...');
		lockableDesktop.ping(() => {});
	});
});

server.listen(port, () => {
    console.log(`Server started on port ${server.address().port}`);
});