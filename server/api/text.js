const router = require('express').Router()
const {twilioConfig, twilioNumber, me} = require('../../secrets')
const {Client} = require('../db/models')
var Twilio = require('twilio');

//Connects to Twilio config variables in secret file
var messageSender = new Twilio(twilioConfig.accountSid, twilioConfig.authToken);

module.exports = router;

router.post('/broadcast', (req, res, next) => {
  Client.findAll()
  .then(clients => {
    clients.map(client => {
      return messageSender.messages.create({
        body: req.body.message,
        to: me, //client.phone for production
        from: twilioNumber
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
  Client.findById(req.body.id)
  .then(client => {
    return messageSender.messages.create({
      body: req.body.message,
      to: me, //client.phone for production
      from: twilioNumber
    })
    .then((messageSent) => {
      console.log('Message send successful ' + messageSent.sid)
      res.json(messageSent.body)
    })
    .catch(next)
  })
})
