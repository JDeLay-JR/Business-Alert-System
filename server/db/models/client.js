const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Client = db.define('client', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  phone: {
    type: Sequelize.STRING
  }
})

Client.prototype.getName = function() {
  return `${this.firstName} ${this.lastName}`
}

module.exports = Client
