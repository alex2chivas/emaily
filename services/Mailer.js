const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

const { sendGridKey } = require('../config/keys');

class Mailer extends helper.Mail {}