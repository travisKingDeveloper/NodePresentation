const mongoose = require('mongoose')
const config = require('config')
const mongodbConfig = config.get('mongodb')

mongoose.connect(mongodbConfig.connectionUri)