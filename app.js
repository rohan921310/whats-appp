const qrcode = require('qrcode-terminal');
const http = require('http')
const { Client } = require('whatsapp-web.js');
const client = new Client({ 
    puppeteer: {
        headless: true,
	args: ['--no-sandbox']
    }
});
// https://medium.com/como-programar-em-1-dia/como-fazer-um-rob%C3%B4-de-whatsapp-chatbot-em-1-dia-644ee98054d7

// jontewks/puppeteer

var server = http.createServer((req, res) => {
    //your stuff
  });
  
  server.listen(process.env.PORT || 80, () => {
    console.log("Listening on port 80");
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
