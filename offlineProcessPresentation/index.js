const amqp = require('amqplib-easy')('amqp://localhost');

require('./config/mongooseConfig')
const fakeUser = require('./fakeData')
 
amqp.consume({
    queue: 'FakeData',
    exchange: 'AMQP default'
}, function () {
    fakeUser().save((err) => {
        if(err) console.log(err)

        else 
            console.log('success')
    })
});
