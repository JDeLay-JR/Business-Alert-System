const faker = require('faker');
const Promise = require('bluebird');
const db = require('../server/db')
const { Client } = require('../server/db/models');

//Type in how many fake people to make
const howManyToMake = 9;

//Edit their fake info
function randClient() {
  let firstName = faker.name.firstName()
  let lastName = faker.name.lastName()
  let email = faker.internet.email();
  let phone = "+15164580715"
  return {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone
  }
}

//MAKING AN ARRAY OF FAKE PEOPLE OBJECTS
function makeThisMany (number, callback) {
  const results = [];
  while (number--) {
    results.push(callback());
  }
  return results;
}

//GENERATE RANDOM PEOPLE
function generate () {
  const clients = makeThisMany(howManyToMake, randClient);
  return clients;
}

//SAVE CREATED STUFF
function create () {
  return Promise.map(generate(), client => Client.create(client))
}

function seed () {
  return Promise.all( [create()] )
}

console.log('Syncing database');

db.sync({force: true})
  .then(() => {
    console.log('Seeding database');
    return seed();
  })
  .then(() => console.log('Seeding successful'))
  .catch(err => {
    console.error('Error while seeding');
    console.error(err.stack);
  })
  .finally(() => {
    db.close();
    return null;
  })
