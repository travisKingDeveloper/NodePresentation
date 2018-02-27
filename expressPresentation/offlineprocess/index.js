const amqp = require('amqplib-easy')('amqp://localhost')
 
module.exports = RequestFakeData = () => {
    amqp.sendToQueue({ queue: 'FakeData' }, {});
}