#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((err, ch) => {
        var ex = 'direct_logs';
        var args = process.argv.slice(2);
        var msg = args.slice(1).join(' ') || 'hellow world' + new Date();
        var severity = (args.length > 0) ? args[0] : 'info';

        ch.assertExchange(ex, 'direct', { durable: false });
        ch.publish(ex, severity, new Buffer(msg));
        console.log(" [x] Sent %s: '%s'", severity, msg);
    });

    setTimeout(() => {
        conn.close();
        process.exit(0);
    }, 500);
});