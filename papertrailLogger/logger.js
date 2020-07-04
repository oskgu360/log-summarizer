const winston = require("winston");

require("winston-papertrail").Papertrail;
var logger = new winston.transports.Papertrail({
  host: "logs6.papertrailapp.com",
  port: 45058,
  handleExceptions: true
});
module.exports = logger;
