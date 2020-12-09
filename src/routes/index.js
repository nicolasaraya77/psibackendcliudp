const express = require("express");
const router = express.Router();

//controladores
const Auth = require("../controllers/Auth");

//home
router.get("/", (req, res) => {
  res.json({ msg: "hola" });
});

//login registro
router.post("/login", Auth.signIn);
router.post("/signup", Auth.signUp);
module.exports = router;
