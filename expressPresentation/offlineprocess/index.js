const amqp = require('amqplib-easy')('amqp://localhost')
 
function RequestFakeData() {
    amqp.sendToQueue({ queue: 'FakeData' }, {});
}

module.exports = RequestFakeData