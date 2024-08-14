const { getTodosGames } = require("../services/game");

function getGames(req, res) {
  try {
    const games = getTodosGames();
    res.send(games);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getGames
};
