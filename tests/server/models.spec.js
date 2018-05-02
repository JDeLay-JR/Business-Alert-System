/* global describe beforeEach it */
const {expect} = require('chai')
const should = require('chai').should()
const db = require('../../server/db')
const User = db.model('user')
const Client = db.model('client')

describe('Database Models', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('User Model', () => {
    let user
    beforeEach(() => {
      return User.create({
        email: 'test@test.com',
        password: 'test',
        companyName: 'Test Inc'
      })
        .then(newUser => {
          user = newUser
        })
    })

    describe('email', () => {
      it('should have property email', () => {
        user.should.have.property('email')
      })
      it('email has correct information', () => {
        expect(user.email).to.be.equal('test@test.com')
      })
    })

    describe('correctPassword', () => {
      it('should have property password', () => {
        user.should.have.property('password')
      })
      it('returns true if the password is correct', () => {
        expect(user.correctPassword('test')).to.be.equal(true)
      })
      it('returns false if the password is incorrect', () => {
        expect(user.correctPassword('incorrect')).to.be.equal(false)
      })
    })

    describe('correct companyName', () => {
      it('should have property companyName', () => {
        user.should.have.property('companyName')
      })
      it('companyName has correct information', () => {
        expect(user.companyName).to.be.equal('Test Inc')
      })
    })
  })

  describe('Client Model', () => {

    let user, client

    beforeEach(() => {
      return User.create({
        email: 'test@test.com',
        password: 'test',
        companyName: 'Test Inc'
      })
        .then(newUser => {
          user = newUser
          return Client.create({
            firstName: "Marty",
            lastName: "McFly",
            email: "doc@hover.com",
            phone: "1234567890",
            userId: 1
          })
          .then(newClient => {
            client = newClient
          })
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
})

