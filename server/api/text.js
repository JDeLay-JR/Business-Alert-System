const router = require('express').Router()
const TwilioConfig = require('../../secrets')

var Twilio = require('twilio');
var messageSender = new Twilio(TwilioConfig.accountSid, TwilioConfig.authToken);


router.post('/', (req, res, next) => {
  let message = req.body.message
  messageSender.messages.create({
  body: message,
  to: '+15164580715',  // Text this number
  from: '+15162523389' // From a valid Twilio number
})
.then((messageSent) => {
  console.log('Message send successful ' + messageSent.sid)
  res.json(messageSent.body)
})
.catch(next)
})

module.exports = router;
