"use strict";

module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define(
    "Role",
    {
      nombre: DataTypes.STRING,
    },
    {
      tableName: "Roles",
    }
  );

  Rol.associate = function (models) {
    Rol.belongsTo(models.Usuario, { as: "usuario", foreignKey: "userId" });
  };

  return Rol;
};

/* 

"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     
    static associate(models) {
      Rol.belongsTo(models.Usuario, { as: "usuario", foreignKey: "userId" });
    }
  }
  Rol.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Rol",
      tableName: "Roles",
    }
  );
  return Rol;
};


*/
