require("dotenv").config();
const email_config = {
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    Pass: process.env.EMAIL_PWD,
  },
};

module.exports = email_config;
