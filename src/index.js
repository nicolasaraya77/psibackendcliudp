const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./models/index");
require("dotenv").config({ path: "../variables.env" });
//---------Init---------
const app = express();

//-------Settings-------
const PORT = process.env.PORT || 2000;
const HOST = process.env.HOST || "0.0.0.0";

//------Midlewares------
app.use(morgan("dev"));
app.use(cors()); //permitir cross origin requests

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//rutas
app.use(require("./routes"));

app.listen(PORT, HOST, function () {
  sequelize.sync().then(() => {
    console.log("Nos hemos conectado a la base de datos!!!!!");
  });
});
