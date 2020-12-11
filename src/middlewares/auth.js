const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");
const { Usuario } = require("../models/index");

exports.ensureAuth = (req, res, next) => {
  // Comprobar que existe el token
  if (!req.headers.authorization) {
    res
      .status(403)
      .json({ message: "La peticion no tiene la cabecera de Autenticacion." });
  } else {
    // Comrpobar la validez de este token
    const token = req.headers.authorization.replace(/['"]+/g, "");

    // Comprobar la validez de este token
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          msg: "Ha ocurrido un problema al decodificar el token",
          err,
        });
      } else {
        Usuario.findByPk(decoded.user.id).then((user) => {
          console.log(user.roles);
          req.user = user;
          next();
        });
      }
    });
  }
};
