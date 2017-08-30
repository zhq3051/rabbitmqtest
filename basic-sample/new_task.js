var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err,conn) => {
    conn.createChannel((err,ch)=> {
        var q = 'task_queue';
        var msg = process.argv.slice(2).join(' ') || 'hello world';

        ch.assertQueue(q, {durable: true});
        ch.sendToQueue(q, new Buffer(msg), {persistent: true});
        console.log(" [x] Send '%s'", msg);
    });
});



