"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Convenio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Convenio.hasOne(models.TipoInstitucion, {
        as: "institucion",
      });
    }
  }
  Convenio.init(
    {
      nombre: { allowNull: false, type: DataTypes.STRING },
      fecha_inicio: { type: DataTypes.DATE, allowNull: false },
      estado: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
      modelName: "Convenio",
    }
  );
  return Convenio;
};
