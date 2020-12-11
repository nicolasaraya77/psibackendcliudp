const express = require("express");
const router = express.Router();

//controladores
const Auth = require("../controllers/Auth");
const UserController = require("../controllers/User");
const RoleController = require("../controllers/Roles");

// Middlewares
const auth = require("../middlewares/auth");

//home para probar que funciona el server
router.get("/", (req, res) => {
  res.json({ msg: "hola" });
});

//login registro
router.post("/login", Auth.signIn);
router.post("/signup", Auth.signUp);

//usuarios
router.get("/usuario", [auth.ensureAuth], UserController.index);
router.put(
  "/usuario/:id",
  [auth.ensureAuth],
  UserController.find,
  UserController.update
);

//roles
router.get("/roles", [auth.ensureAuth], RoleController.index);

module.exports = router;
