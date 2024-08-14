const { Router } = require("express");
const { getGames } = require("../controladores/game");

const router = Router();

router.get('/', getGames);

module.exports = router;
