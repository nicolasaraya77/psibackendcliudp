"use strict";
const faker = require("faker");
const { Usuario } = require("../../models/index");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let roles = [];
    // Obtenemos los usuarios
    let users = await Usuario.findAll();

    // Recorremos los usuarios y añadimos una direccion para cada unos
    users.forEach((user) => {
      roles.push({
        nombre: faker.name.findName(),
        userId: user.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    return queryInterface.bulkInsert("Roles", roles, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Roles", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
