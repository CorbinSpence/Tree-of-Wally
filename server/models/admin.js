const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Admin extends Model {}

Admin.init(
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    first_last_name:{
        type: DataTypes.STRING
    },
    tagline:{
        type: DataTypes.STRING
    },
    dateofbirth:{
        type: DataTypes.DATE
    },
    country:{
        type: DataTypes.ENUM("","US","UK", "AUS")
    },
    zip:{
        type: DataTypes.INTEGER
    },
    email:{
        type: DataTypes.STRING
    },
    profession:{
        type: DataTypes.STRING
    },
    company:{
        type: DataTypes.STRING
    },
    links:{
        type: DataTypes.STRING
    }
    // product_name:{
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // price:{
    //   type: DataTypes.DECIMAL,
    //   allowNull: false,
    //   validate:{
    //     isDecimal: true
    //   }
    // },
    // stock:{
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   validate:{
    //     isNumeric: true
    //   },
    //   defaultValue: 10
    // },
    // category_id:{
    //   type: DataTypes.INTEGER,
    //   references:{
    //     model:'category',
    //     key: 'id'
    //   }
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'admin',
  }
);

module.exports = Admin;