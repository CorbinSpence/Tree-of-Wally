const { User } = require('../models');

const userData = [
  {
    first_last_name: 'Joe',
  },
  {
    first_last_name: 'Penny',
  },
  {
    first_last_name: 'Finn',
  },
  {
    first_last_name: 'Dave',
  },
  {
    first_last_name: 'Kenny',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;