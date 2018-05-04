//Chai imports
const {expect} = require('chai')
const should = require('chai').should()

//Database Imports
const db = require('../../../server/db')
const User = db.model('user')


describe('User Model', () => {
  let user
  beforeEach(async () => {
    await db.sync({force: true})
    user = await User.create({
      email: 'test@test.com',
      password: 'test',
      companyName: 'Test Inc'
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

  describe('companyName', () => {
    it('should have property companyName', () => {
      user.should.have.property('companyName')
    })
    it('companyName has correct information', () => {
      expect(user.companyName).to.be.equal('Test Inc')
    })
  })
})
