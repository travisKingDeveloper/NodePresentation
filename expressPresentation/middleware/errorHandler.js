const isProd = process.env.NODE_ENV === 'production'
const statusCodes = require('http-status-codes')

module.exports = (err, req, res, next) => {
  // set locals, only providing error in development 
  res.locals.message = err.message 
  res.locals.error = !isProd ? err : {} 
 
  // render the error page 
  res.status(err.status || statusCodes.INTERNAL_SERVER_ERROR) 
  res.render('error')
}