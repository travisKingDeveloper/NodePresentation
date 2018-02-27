const express = require('express')
const path = require('path')
const logger = require('./logging/expressLogger')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const middleware = require('./middleware')
const controllers = require('./controllers')

//Lazy mongo init
const database = require('./database')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Route Logging - MUST REGISTER BEFORE all routers.
app.use(logger.createRouteLogger())

//register all express routes
app.use(controllers);
app.use('/diagnostic', middleware.diagnostic)

// Error Logging - MUST REGISTER AFTER all routers.
app.use(logger.createErrorLogger())

// Register General/Global Handlers
app.use(middleware.notFound)
app.use(middleware.errors)

module.exports = app
