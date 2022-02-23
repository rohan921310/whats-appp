const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client({ 
    puppeteer: {
        headless: true,
	args: ['--no-sandbox']
    }
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
    console.log(qr);
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
