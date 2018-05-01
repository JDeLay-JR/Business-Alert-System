const faker = require('faker');
const Promise = require('bluebird');
const db = require('../server/db')
const { Client, User } = require('../server/db/models');

//Type in how many fake people to make
const howManyToMake = 9;
const howManyToMakeUser = 1;

//Edit their fake info
function randClient() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    userId: 1
  }
}

function randUser() {
  return {
        email: 'test@test.com',
        password: 'test',
        companyName: faker.lorem.word().toUpperCase(),
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
function generateClient () {
  const clients = makeThisMany(howManyToMake, randClient);
  return clients;
}

function generateUser () {
  const user = makeThisMany(howManyToMakeUser, randUser)
  return user;
}

//SAVE CREATED STUFF
function createUser () {
  return Promise.map(generateUser(), user => User.create(user))
}

function createClient () {
  return Promise.map(generateClient(), client => Client.create(client))
}

function seed () {
  return Promise.all( [createUser()] ).then(() => createClient())
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
