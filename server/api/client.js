const router = require('express').Router()
const {Client} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Client.findAll({})
    .then(clients => res.json(clients))
    .catch(next)
})
