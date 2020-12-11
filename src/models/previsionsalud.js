("use strict");

module.exports = (sequelize, DataTypes) => {
  const PrevisionSalud = sequelize.define(
    "PrevisionSalud",
    {
      nombre: { allowNull: false, type: DataTypes.STRING },
    },
    {
      tableName: "PrevisionSalud",
    }
  );

  PrevisionSalud.associate = function (models) {
    //PrevisionSalud le pertenece a un paciente
    //PrevisionSalud.belongsTo()
    PrevisionSalud.belongsTo(models.Paciente, {
      as: "paciente",
      foreignKey: "pacienteId",
    });
  };

  return PrevisionSalud;
};
