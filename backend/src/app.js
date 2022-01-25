const express = require("express");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models/relations");
db.sequelize.sync({ alter: true }).then(() => {
  console.log("Drop and re-sync db.");
});

const registroRoutes = require("./routes/registrarse.routes");

app.use("/backend", registroRoutes);

module.exports = app;
