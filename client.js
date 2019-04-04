const lockYourWindows = require('lock-your-windows');
const WebSocket = require('ws');

let args = process.argv.slice(2);
args = args[0].split(':');
const host = args[0];
const port = args[1];

const client = new WebSocket(`ws://${host}:${port}/`);

client.on('open', function open() {
	console.log('Logging in on server...');
	client.send('desktop');
});

client.on('ping', () => {
	lockYourWindows.lock();
	console.log('LOCKING SCREEN....');
});

