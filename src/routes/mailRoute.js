const sendMail = require("../Utils/sendMail");
const emailroute = require("express").Router();

emailroute("/send", sendMail);
