"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Pacientes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      rut: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      apellido: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nombre_social: {
        type: Sequelize.STRING,
      },
      fecha_nacimiento: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      intentos_contacto: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      pronombre: {
        type: Sequelize.STRING,
      },
      genero: {
        type: Sequelize.STRING,
      },
      sexo: {
        type: Sequelize.BOOLEAN,
      },
      fecha_ingreso: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Pacientes");
  },
};
