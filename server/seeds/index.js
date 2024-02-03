const seedUsers = require('./user-seeds') 
const seedInvestors = require('./investor-seeds') 
const seedAdmins = require('./admin-seeds') 

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();

  
    await seedInvestors();

  
    await seedAdmins();

  
    process.exit(0);
  };

  seedAll()