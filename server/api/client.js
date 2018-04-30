const router = require('express').Router()
const {Client} = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
  if(!req.body) {
    const err = new Error('Cannot submit an empty user form!')
    next(err)
  } else {
    Client.create(req.body)
    .then(client => res.json(client))
    .catch(err => console.error(err))
  }

})

router.get('/', (req, res, next) => {
  //TODO:  {where: {userId: req.body.userId}}
  //HAVE CLIENTS LOAD ON INITIAL DATA
  Client.findAll()
    .then(clients => res.json(clients))
    .catch(next)
})

