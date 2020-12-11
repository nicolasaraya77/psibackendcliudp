"use strict";

const { Usuario } = require("../../models/index");
const bcrypt = require("bcryptjs");
const authConfig = require("../../../config/auth");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    return Promise.all([
      Usuario.create({
        nombre: "Esteban",
        apellido: "Leon",
        nombre_social: "ban",
        email: "asteben@gmail.com",
        password: bcrypt.hashSync("ban", +authConfig.rounds),
      }),

      Usuario.create({
        nombre: "Paula",
        apellido: "Agilera",
        nombre_social: "Pau",
        email: "paula.aguilera@gmail.com",
        password: bcrypt.hashSync("paula", +authConfig.rounds),
      }),
      Usuario.create({
        nombre: "Juan",
        apellido: "Vergara",
        nombre_social: "JJ",
        email: "juan.vergaram@gmail.com",
        password: bcrypt.hashSync("juanvm", +authConfig.rounds),
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return Promise.all([queryInterface.bulkDelete("Usuarios", null, {})]);
  },
};
