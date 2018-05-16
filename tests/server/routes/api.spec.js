//Chai imports
const {expect} = require('chai')
const request = require('supertest')

//Server and Database Imports
const db = require('../../../server/db')
const server = require('../../../server/index')
const User = db.model('user')
const Client = db.model('client')

describe('API Routes', () => {

  let authenticatedUser = request.agent(server);

  beforeEach(async () => {
  await db.sync({force: true})

  await User.create({
          email: 'test@test.com',
          password: 'test',
          companyName: 'Test Inc'
    })

  await Client.create({
          firstName: "Marty",
          lastName: "McFly",
          email: "doc@hover.com",
          phone: "1234567890",
          userId: 1
        })

    await Client.create({
          firstName: "Clark",
          lastName: "Kent",
          email: "super@man.com",
          phone: "1234567890",
          userId: 1
        })
  })

  describe('/POST a new client', () => {
    it('can create a new client', () => {
      request(authenticatedUser)
        .post('/api/client')
        .send({
          firstName: "Mick",
          lastName: "Jagger",
          email: "rock@roll.com",
          phone: "1234567890",
          userId: 1
          })
        .then(res => {
          expect(200)
          expect(res.body.email).to.be.equal('rock@roll.com')
        })
    })
  })

  describe('/DELETE a client', () => {
    it('can delete a new client', () => {
      request(server)
        .delete(`/api/client/${2}`)
        .then(res => {
          expect(200)
          expect(res.body).to.be.equal('2')
        })
      request(server)
    })
  })

  // describe('/PUT a client', () => {
  //   it('can update an existing client', () => {
  //     let clientToUpdate = {
  //       firstName: "Bob",
  //       lastName: "Kent",
  //       email: "super@man.com",
  //       phone: "1234567890",
  //       userId: 1
  //     }
  //     request(server)
  //       .put(`/api/client/${2}`, clientToUpdate)
  //       .then(res => {
  //         expect(200)
  //         expect(res.body.firstName).to.be.equal('Bob')
  //       })
  //   })
  // })
})
