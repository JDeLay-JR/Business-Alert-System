const faker = require('faker');
const {Client} = require('../server/db/models')
const db = require('../server/db')

var randomName = faker.name.findName(); // Rowan Nikolaus

var randomCard = faker.helpers.createCard(); // random contact card containing many properties

function createOneUser() {
  let firstName = randomName.split(" ")[0];
  let lastName = randomName.split(" ")[1];
  let email = faker.internet.email(); // Kassandra.Haley@erich.biz
  // let phone = parseInt(faker.phone.phoneNumberFormat().split('-').join(''))
  let phone = 8888888888
  return {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone
  }
}

function builder () {
  // for (let i = 0; i < 15; i++) {
    // }
    let randomPerson = createOneUser()
    const dude = Client.create({
      firstName: "Jim",
      lastName: "Tom",
      email: "j@me.com",
      phone: 5165164444
    });
    return dude
}

const main = () => {
  console.log("Syncing db...");
  db
    .sync({ force: true })
    .then(() => {
      console.log("Seeding databse...");
      console.log("WHat is it?", builder())
      return builder();
    })
    .catch(err => {
      console.log("Error while seeding");
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
