const qrcode = require('qrcode-terminal');
// const http = require('http')
var express = require('express');
var app = express();

const { Client } = require('whatsapp-web.js');
var fs = require("fs");
const client = new Client({
    puppeteer: {
        headless: true,
        args: ['--no-sandbox']
    }
});
// https://medium.com/como-programar-em-1-dia/como-fazer-um-rob%C3%B4-de-whatsapp-chatbot-em-1-dia-644ee98054d7

// jontewks/puppeteer

// var server = http.createServer((req, res) => {
//     //your stuff
//   });


function start() {

    client.on('qr', qr => {
        qrcode.generate(qr, { small: true });
        console.log(qr);
        console.log('d');
    });


    client.on('ready', () => {
        console.log('Client is ready!');

        client.sendMessage('919213109261@c.us', 'hiii');
    });

    client.on('message', message => {
        if (message.body === '!ping') {
            message.reply('pong');
        }
    });


    client.initialize();
}



app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });

    client.sendMessage('919213109261@c.us', 'sendddd');
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port, () => {
    console.log(`Server successfully running on ${port}`);
});

client.on('disconnected', (reason) => {
    console.log('hj', reason)
    start();
});


start();


