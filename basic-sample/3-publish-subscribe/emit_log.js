#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (err, conn) {
    conn.createChannel((err, ch) => {
        var ex = 'logs';
        var msg = process.argv.slice(2).join(' ') || 'This is a test' + new Date();
        ch.assertExchange(ex, 'fanout', { durable: false });
        ch.publish(ex, '', new Buffer(msg));
        console.log(" [x] Sent %s", msg);
    });

    setTimeout(() => {
        conn.close();
        process.exit
    }, 500);
});