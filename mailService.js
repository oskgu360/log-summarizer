var nodemailer = require("nodemailer");

const mailSettings = {
  service: "gmail",
  auth: {
    user: "MAIL@gmail.com",
    pass: "PASSWORD"
  }
};
const mailOptions = {
  from: "MAIL@gmail.com",
  to: "MAIL@gmail.com",
  subject: "Papertrail log summarize"
};

module.exports = class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport(mailSettings);
  }

  sendEmail(mailContent) {
    this.transporter.sendMail(
      { ...mailOptions, text: mailContent },
      (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      }
    );
  }
};
