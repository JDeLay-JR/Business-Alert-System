//Chai imports
const {expect} = require('chai')
const request = require('supertest')

//Server and Database Imports
const db = require('../../../server/db')
const server = require('../../../server/index')
const User = db.model('user')
const Client = db.model('client')

describe('API Routes', () => {

  let user, client
  let authenticatedUser = request.agent(server);

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

    // authenticatedUser
    //   .post('/auth/login')
    //   .send({email: 'test@test.com', password: 'test'})
    //   .end(res => {
    //     expect(res.statusCode).to.equal(200);
    //     expect('Location', '/home');
    //     done();
    //   });

  describe('/POST a new client', () => {
    it('can create a new client', () => {
      request(server)
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
})
