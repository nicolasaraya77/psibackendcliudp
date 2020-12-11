"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Coordinador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Coordinador.init(
    {
      nombre: { allowNull: false, type: DataTypes.STRING },
      apellido: { allowNull: false, type: DataTypes.STRING },
      cargo: { allowNull: false, type: DataTypes.STRING },
      email: { allowNull: false, type: DataTypes.STRING },
      telefono: { allowNull: false, type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "Coordinador",
    }
  );
  return Coordinador;
};
