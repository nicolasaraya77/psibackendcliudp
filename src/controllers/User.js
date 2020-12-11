const { Usuario, Role } = require("../models/index");

module.exports = {
  async find(req, res, next) {
    await Usuario.findByPk(req.params.id)
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => {
        res.status(404).json({ msg: "Usuario no encontrado" });
      });
  },

  //async findUserByRol(req,res,next) {
  //await
  //}

  async index(req, res) {
    let users = await Usuario.findAll({
      include: {
        association: "rol",
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

  // Show
  async show(req, res) {
    res.json(req.user);
  },

  // Update

  async update(req, res) {
    if (!req.user) {
      req.status(404).json({ msg: "Error" });
    }
    await Role.update(
      { nombre: req.body.role },
      { where: { userId: req.user.id } }
    );

    res.json({ msg: "rol actualizado con exito" });
  },
};
