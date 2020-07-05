const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const MailService = require("./mailService");
const bodyParser = require("body-parser");

const mailService = new MailService();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/logs", (req, res) => {
  if (req && req.body && req.body.payload && req.body.payload.events) {
    mailService.sendEmail(
      jsonToEmailFormat(groupAndCount(req.body.payload.events))
    );
    res.status(200).send();
  } else {
    res.status(400).send();
  }
});

const groupAndCount = events => {
  return events.reduce((total, event) => {
    total[event.message] = (total[event.message] || 0) + 1;
    return total;
  }, {});
};

const jsonToEmailFormat = summarizedEvents => {
  let mailContent =
    "Following is the count of each message from the registred logs in Papertrail.\n\n";
  for (var key of Object.keys(summarizedEvents)) {
    mailContent += '"' + key + '" Rows: ' + summarizedEvents[key] + "\n";
  }
  return mailContent;
};

app.listen(port, () => console.log(`Listening on port ${port}`));
