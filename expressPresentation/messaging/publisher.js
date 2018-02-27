const config = require('config')
const amqpConfig = config.get('amqp')
const amqp = require('amqplib-easy')(amqpConfig.connectionUri)

module.exports.publish = async (payload, messageOptions) => {
    const queueDefinition = { ...amqpConfig.queueOptions }

    await amqp.sendToQueue(queueDefinition, payload, messageOptions)
}

