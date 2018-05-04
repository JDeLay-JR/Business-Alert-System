//Chai imports
const {expect} = require('chai')
const request = require('supertest')

//Server and Database Imports
const db = require('../../../server/db')
const server = require('../../../server/index')
const User = db.model('user')
const Client = db.model('client')

describe('Auth Routes', () => {

  let user, client

  beforeEach(async () => {
    await db.sync({force: true})

    user = await User.create({
          email: 'test@test.com',
          password: 'test',
          companyName: 'Test Inc'
    })

    client = await Client.create({
          firstName: "Marty",
          lastName: "McFly",
          email: "doc@hover.com",
          phone: "1234567890",
          userId: 1
        })
  })

  describe('login functionality', () => {
    it('login for a valid user gets a 200 response', () => {
      return request(server)
        .post('/auth/login')
        .send({email: 'test@test.com', password: 'test'})
        .expect(200)
        .then(res => {
          expect(res.body.email).to.be.equal('test@test.com')
          expect('Location', '/home')
        })
    })

    it('login for a valid user with incorrect password gets a 401 response', () => {
      return request(server)
        .post('/auth/login')
        .send({email: 'test@test.com', password: 'roast'})
        .expect(401)
    })

    it('login for an invalid user gets a 401 response', () => {
      return request(server)
        .post('/auth/login')
        .send({email: 'yikes@test.com', password: 'roast'})
        .expect(401)
    })
  })

  describe('sign up functionality', () => {
    it('a user can sign up', async () => {
      await request(server)
        .post('/auth/signup')
        .send({email: 'anotherTest@test.com', password: 'anotherTest', companyName: 'anotherTest'})
        .expect(200)
        .then(res => {
          expect(res.body.email).to.be.equal('anotherTest@test.com')
        })
      })
  })
})
