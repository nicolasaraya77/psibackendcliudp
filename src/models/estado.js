("use strict");

module.exports = (sequelize, DataTypes) => {
  const Estado = sequelize.define(
    "Estado",
    {
      nombre: { allowNull: false, type: DataTypes.STRING },
    },
    {
      tableName: "Estados",
    }
  );

  Estado.associate = function (models) {
    //Estado le pertenece a un paciente
    Estado.belongsTo(models.Paciente, {
      as: "paciente",
      foreignKey: "pacienteId",
    });
  };

  return Estado;
};
