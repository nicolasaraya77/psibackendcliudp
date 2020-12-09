const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./models/index");
//---------Init---------
const app = express();

//-------Settings-------
const PORT = process.env.PORT || 2000;

//------Midlewares------
app.use(morgan("dev"));
app.use(cors()); //permitir cross origin requests

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//rutas
app.use(require("./routes"));

app.listen(PORT, function () {
  console.log(`Example app listening on http://localhost:${PORT}!`);
  sequelize.authenticate().then(() => {
    console.log("Nos hemos conectado a la base de datos!!!!!");
  });
});
