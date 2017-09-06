#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://rabbitmqtest:111111@192.168.98.128:5672', function (err, conn) {
    conn.createChannel(function (err, ch) {
        var q = 'hello';

        ch.assertQueue(q, { durable: false });
        ch.sendToQueue(q, new Buffer('Hello world'));
        console.log("[x] Send hello world!");
    });
    setTimeout(function () {
        conn.close();
        process.exit(0);
    }, 500);
});

