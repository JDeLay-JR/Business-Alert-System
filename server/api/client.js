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
  const userId = req.user.id
  Client.findAll({where: {userId}})
    .then(clients => res.json(clients))
    .catch(next)
})

router.put('/:id', async (req, res, next) => {
  const client = req.body
  const id = req.params.id
  await Client.update(client, {where: {id}})
  const updatedClient = await Client.findOne({where: {id}})
  console.log(updatedClient)
  res.send(updatedClient)
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  Client.destroy({where: {id}})
    .then(() => res.json(id))
    .catch(next)
})

