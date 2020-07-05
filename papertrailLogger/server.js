/*
 * API including three endpoints to produce some accesslogs to papertrail
 */

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("./logger");
const expressWinston = require("express-winston");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/public", express.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs");
app.use(
  expressWinston.logger({
    transports: [logger],
    meta: false,
    msg: `{{req.ip}} - {{res.statusCode}} - {{req.method}} - {{res.responseTime}}ms - {{req.url}} - {{req.headers['user-agent']}}`,
    expressFormat: false,
    colorize: true
  })
);

app.get("/success", (req, res) => {
  res.status(200).send();
});

app.get("/unauth", (req, res) => {
  res.status(403).send();
});

app.get("/error", (req, res) => {
  res.status(500).send();
});

app.listen(5000, () => {
  console.log("App listening on port: 5000");
});
