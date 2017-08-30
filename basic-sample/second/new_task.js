#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn){
    conn.createChannel(function(err, ch){
        var q = 'task_queue';
        var msg = process.argv.slice(2).join(' ') || 'This is a test';

        ch.assertQueue(q, {durable: true});

        ch.sendToQueue(q, new Buffer(msg), {persistent: true});

        console.log(" [x] Sent '%s'", msg);
    });
});