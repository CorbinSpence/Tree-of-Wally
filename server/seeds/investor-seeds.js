const { Investor } = require('../models');

const investorData = [
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

const seedInvestors = () => Investor.bulkCreate(investorData);

module.exports = seedInvestors;