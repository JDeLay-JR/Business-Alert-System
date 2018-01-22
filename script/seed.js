
const faker = require('faker');
const {Client} = require('../server/db/models')
const db = require('../server/db')

var randomName = faker.name.findName();
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

function createOneClient() {
  let firstName = randomName.split(" ")[0];
  let lastName = randomName.split(" ")[1];
  let email = faker.internet.email();
  let phone = "+15164580715"
  return {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone
  }
}

function makeManyClients(number) {
  let createdUsers = []
  for (let i = 0; i < number; i++) {
    createdUsers.push(createOneClient())
  }
  return createdUsers
}

async function seed (arrOfUsers) {
  arrOfUsers.map(user => {
    Client.create(user)
  })
}

console.log(seed(makeManyClients(3)))
