"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Logs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Usuarios",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      derivacion_id: {
        type: Sequelize.INTEGER,
      },
      entidad: {
        type: Sequelize.STRING,
      },
      atributo: {
        type: Sequelize.STRING,
      },
      valor_antes: {
        type: Sequelize.STRING,
      },
      valor_despues: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Logs");
  },
};
