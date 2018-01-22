const router = require('express').Router()
const TwilioConfig = require('../../secrets')
const {Client} = require('../db/models')
var Twilio = require('twilio');

//Connects to Twilio config variables in secret file
var messageSender = new Twilio(TwilioConfig.accountSid, TwilioConfig.authToken);

//Twillio Account Number Here
const TWILLIONUMBER = '+15162523389'

module.exports = router;

router.post('/broadcast', (req, res, next) => {
  Client.findAll()
  .then(clients => {
    clients.map(client => {
      return messageSender.messages.create({
        body: req.body.message,
        to: client.phone,
        from: TWILLIONUMBER
      })
      .then((messageSent) => {
        console.log('Message send successful ' + messageSent.sid)
        res.json(messageSent.body)
      })
      .catch(next)
    })
  })
})

router.post('/singleText', (req, res, next) => {
  let id = parseInt(req.body.id)
  Client.findById(id)
  .then(client => {
    return messageSender.messages.create({
      body: req.body.message,
      to: client.phone,
      from: TWILLIONUMBER
    })
    .then((messageSent) => {
      console.log('Message send successful ' + messageSent.sid)
      res.json(messageSent.body)
    })
    .catch(next)
  })
})
