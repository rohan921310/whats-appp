const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
var app = require('express')();
var http = require('http').createServer(app);

var server_port = process.env.YOUR_PORT || process.env.PORT || 3001;
http.listen(server_port, () => {
    console.log("Started on : "+ server_port);
})

const client = new Client({ 
    puppeteer: {
        headless: true,
	args: ['--no-sandbox']
    }
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
    console.log(qr);
    console.log('d');
});

client.on('ready', () => {
    console.log('Client is ready!');
    console.log('Client is ready!');
});


client.on('message', message => {
	if(message.body === '!ping') {
		message.reply('pong');
	}
});

client.initialize();
