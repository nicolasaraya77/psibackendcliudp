"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TipoInstitucion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TipoInstitucion.belongsTo(models.Convenio, {
        as: "intitucion",
        foreignKey: "convenioId",
      });
    }
  }
  TipoInstitucion.init(
    {
      nombre: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "TipoInstitucion",
    }
  );
  return TipoInstitucion;
};
