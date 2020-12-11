"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Paciente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Paciente.init(
    {
      rut: { allowNull: false, type: DataTypes.STRING },
      nombre: { allowNull: false, type: DataTypes.STRING },
      apellido: { allowNull: false, type: DataTypes.STRING },
      nombre_social: { type: DataTypes.STRING },
      fecha_nacimiento: { allowNull: false, type: DataTypes.DATE },
      intentos_contacto: { type: DataTypes.INTEGER },
      pronombre: { type: DataTypes.STRING },
      sexo: { type: DataTypes.BOOLEAN },
      genero: { type: DataTypes.STRING },
      fecha_ingreso: { allowNull: false, type: DataTypes.DATE },
    },
    {
      sequelize,
      modelName: "Paciente",
    }
  );
  return Paciente;
};
