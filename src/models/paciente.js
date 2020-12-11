("use strict");

module.exports = (sequelize, DataTypes) => {
  const Paciente = sequelize.define(
    "Paciente",
    {
      rut: { allowNull: false, type: DataTypes.STRING },
      nombre: { allowNull: false, type: DataTypes.STRING },
      apellido: { allowNull: false, type: DataTypes.STRING },
      nombre_social: { type: DataTypes.STRING },
      fecha_nacimiento: { allowNull: false, type: DataTypes.DATE },
      pronombre: { type: DataTypes.STRING },
      sexo: { type: DataTypes.BOOLEAN },
      genero: { type: DataTypes.STRING },
      fecha_ingreso: { allowNull: false, type: DataTypes.DATE },
    },
    {
      tableName: "Pacientes",
    }
  );

  Paciente.associate = function (models) {
    //paciente tiene muchos contactos
    //paciente tiene una sola prevision de salud
    //paciente tiene un solo estado
    Paciente.hasOne(models.Estado, { as: "estado", foreignKey: "pacienteId" });
    Paciente.hasOne(models.PrevisionSalud, {
      as: "prevision",
      foreignKey: "pacienteId",
    });
  };

  return Paciente;
};
