"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasOne(models.Roles, { as: "rol", foreignKey: "rolId" });
    }
  }
  Usuario.init(
    {
      nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          isAlpha: {
            msg: "el nombre solo puede contener letras",
          },
          len: {
            args: [3, 100],
            msg: "el nombre minimo de 3 caracteres",
          },
        },
      },
      nombre_social: {
        type: DataTypes.STRING,
      },
      apellido: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          isAlpha: {
            msg: "el nombre solo puede contener letras",
          },
          len: {
            args: [3, 100],
            msg: "el nombre minimo de 3 caracteres",
          },
        },
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: {
            msg: "El email debe ser correo valido",
          },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );
  return Usuario;
};
