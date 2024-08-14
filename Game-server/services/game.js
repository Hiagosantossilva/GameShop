const fs = require("fs");

function getTodosGames() {
  return JSON.parse(fs.readFileSync("games.json"));
}

module.exports = {
  getTodosGames
};
