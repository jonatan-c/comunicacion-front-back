const registroDB = require("../models/registro.model");

async function informacion(req, res) {
  res.json({
    ok: "La API Funciona!!!",
  });
}

async function registro(req, res) {
  const { nombre, apellido, email, password } = req.body;
  const registro = await registroDB.create({
    nombre,
    apellido,
    email,
    password,
  });
  res.json({
    ok: "Registro Exitoso",
  });
}

module.exports = {
  informacion,
  registro,
};
