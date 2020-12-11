const { Paciente, Estado, PrevisionSalud } = require("../models/index");

module.exports = {
  //buscar paciente
  async find(req, res, next) {
    await Paciente.findByPk(req.params.id)
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => {
        res.status(404).json({ msg: "Paciente no encontrado" });
      });
  },

  //mostrar todos los pacientes
  async index(req, res) {
    await Paciente.findAll({
      include: {
        association: "prevision",
        attributes: ["nombre"],
      },
    })
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // ver paciente
  async show(req, res) {
    res.json(req.user);
  },

  // editar paciente

  async update(req, res) {
    if (!req.user) {
      req.status(404).json({ msg: "Error" });
    }
    /* await Role.update(
      { nombre: req.body.role },
      { where: { userId: req.user.id } }
    );

    res.json({ msg: "rol actualizado con exito" });
    */
  },

  async create(req, res) {
    console.log(req.body);
    const {
      nombre,
      nombre_social,
      apellido,
      pronombre,
      rut,
      sexo,
      genero,
      fecha_ingreso,
      fecha_nacimiento,
    } = req.body;
    const paciente = await Paciente.create(
      {
        nombre: nombre,
        nombre_social: nombre_social,
        apellido: apellido,
        pronombre: pronombre,
        rut: rut,
        sexo: sexo,
        genero: genero,
        fecha_ingreso: fecha_ingreso,
        fecha_nacimiento: fecha_nacimiento,
        prevision: {
          nombre: req.body.prevision,
        },
        estado: {
          nombre: req.body.estado,
        },
      },
      { include: ["estado", "prevision"] }
    );

    console.log(paciente);

    res.json({ msg: "paciente creado con éxito" });
  },

  // borrar paciente
  async delete(req, res) {
    const resultado = await Paciente.destroy({ where: { id: req.params.id } });
    if (!resultado) {
      return next();
    }

    res.json({ msg: "paciente borrado con exito" });
  },
};
