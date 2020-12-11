const { Usuario } = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");
module.exports = {
  //login
  signIn(req, res) {
    let { email, password } = req.body;
    //buscar usuario
    Usuario.findOne({
      where: {
        email: email,
      },
    })
      .then((user) => {
        if (!user) {
          res.status(404).json({ msg: "usuario no encontrado" });
        } else {
          if (bcrypt.compareSync(password, user.password)) {
            console.log(user);

            const body = {
              id: user.id,
              email: user.email,
              password: user.password,
            };
            let token = jwt.sign({ user: body }, authConfig.secret, {
              expiresIn: authConfig.expires,
            });

            res.json({
              user: user,
              token: token,
              message: "Inicio de sesión exitoso",
            });
          } else {
            //acceso no autorizado
            res.status(401).json({ msg: "contraseña incorrecta" });
          }
        }
      })
      .catch((err) => {
        res.status(500).json({ msg: err });
      });
  },
  //registro
  signUp(req, res) {
    //destructuring
    const { nombre, apellido, nombre_social, email } = req.body;
    //encriptar
    let password = bcrypt.hashSync(
      req.body.password,
      Number.parseInt(authConfig.rounds)
    );

    //crear usuario
    Usuario.create({
      nombre: nombre,
      nombre_social: nombre_social,
      email: email,
      apellido: apellido,
      password: password,
    })
      .then((user) => {
        let token = jwt.sign({ user: user }, authConfig.secret, {
          expiresIn: authConfig.expires,
        });

        res.json({
          user: user,
          token: token,
          message: "registro exitoso",
        });
      })
      .catch((err) => {
        res.status(500).json({ msg: err });
        console.log(err);
      });
  },
};
