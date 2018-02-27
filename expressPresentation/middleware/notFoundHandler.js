const statusCodes = require('http-status-codes')

// catch 404 and forward to error handler
module.exports = (req, res, next) => {
    const err = new Error('Not Found')
    err.status = statusCodes.NOT_FOUND
    next(err)
  }
  