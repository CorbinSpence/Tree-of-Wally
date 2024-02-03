const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection')
const bodyparse = require('body-parser')
const cors = require('cors')
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors())

app.use(bodyparse.json());
app.use(bodyparse.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force:false}).then(()=>{
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})