require("dotenv").config()
const Sequelize = require("sequelize")

const sequelize = process.env.JAWSBD_URL?
new Sequelize(process.env.JAWSBD_URL):
new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,
        {
            host:"localhost",
            dialect:"mysql",
            dialectOptions:{
                decimalNumbers: true
            }
        }
    )

module.exports = sequelize