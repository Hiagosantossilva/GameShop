const express = require("express");
const cors = require("cors");
const rotaGame = require("./rotas/game");

const app = express();
app.use(express.json());
app.use(cors({
  origin: "*"
}));

app.use('/games', rotaGame);

const port = 8000;

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
