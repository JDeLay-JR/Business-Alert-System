const router = require('express').Router()
module.exports = router

//Import all routes here
router.use('/client', require('./client'))
router.use('/text', require('./text'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
