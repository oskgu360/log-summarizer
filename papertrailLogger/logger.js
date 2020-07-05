const winston = require("winston");

require("winston-papertrail").Papertrail;
var logger = new winston.transports.Papertrail({
  host: "PAPERTRAILHOST",
  port: 45058,
  handleExceptions: true
});
module.exports = logger;
