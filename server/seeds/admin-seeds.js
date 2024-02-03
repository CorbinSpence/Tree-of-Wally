const { Admin } = require('../models');

const adminData = [
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

const seedAdmins = () => Admin.bulkCreate(adminData);

module.exports = seedAdmins;