const { Usuario } = require("../models/index");

module.exports = {
  async find(req, res, next) {
    let user = await Usuario.findByPk(req.params.id, {
      include: {
        association: "rol",
        attributes: ["nombre"],
      },
    })
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => {
        res.status(404).json({ msg: "Usuario no encontrado" });
      });
  },

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
    console.log(req.user.rol.nombre);
    let usuario = await req.user
      .update(
        { nombre: req.body.rol },
        {
          where: {
            rol: {
              nombre,
            },
          },
        }
      )
      .then((user) => {
        res.json(user);
      });
  },
  /*
  // Delete
  async delete(req, res) {
    req.post.destroy().then((post) => {
      res.json({ msg: "El post ha sido eliminado " });
    });
  },
  */
};
