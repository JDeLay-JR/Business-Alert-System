//Chai imports
const {expect} = require('chai')
const should = require('chai').should()

//Database Imports
const db = require('../../../server/db')
const User = db.model('user')
const Client = db.model('client')

describe('Client Model', () => {

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

  describe('firstName', () => {
    it('should have property firstName', () => {
      client.should.have.property('firstName')
    })
    it('firstName has correct information', () => {
      expect(client.firstName).to.be.equal('Marty')
    })
  })

  describe('lastName', () => {
    it('should have property lastName', () => {
      client.should.have.property('lastName')
    })
    it('lastName has correct information', () => {
      expect(client.lastName).to.be.equal('McFly')
    })
  })

  describe('lastName', () => {
    it('should have property lastName', () => {
      client.should.have.property('lastName')
    })
    it('lastName has correct information', () => {
      expect(client.lastName).to.be.equal('McFly')
    })
  })

  describe('email', () => {
    it('should have property email', () => {
      client.should.have.property('email')
    })
    it('email has correct information', () => {
      expect(client.email).to.be.equal('doc@hover.com')
    })
  })

  describe('phone', () => {
    it('should have property phone', () => {
      client.should.have.property('phone')
    })
    it('phone has correct information', () => {
      expect(client.phone).to.be.equal('1234567890')
    })
  })

  describe('userId', () => {
    it('should have property userId (is associated with a User)', () => {
      client.should.have.property('userId')
    })
    it('userId has correct information', () => {
      expect(client.userId).to.be.equal(1)
    })
  })

})

