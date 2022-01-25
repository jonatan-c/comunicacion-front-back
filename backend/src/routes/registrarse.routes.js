const Router = require("express");
const {
  informacion,
  registro,
} = require("../controllers/registrarse.controller");

const router = Router();

router.get("/", informacion);

router.post("/", registro);

module.exports = router;
