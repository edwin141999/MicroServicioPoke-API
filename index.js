// EXPRESS
const express = require('express');
const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();
const app = express();
const port = 5000;

// ROUTER
app.get('/:pokemon', async (req, res) => {
  P.getPokemonByName(req.params.pokemon)
    .then(response => {
      const data = {
        name: response.name,
        id: response.id,
        sprite: response.sprites.front_default,
      }
      res.send(data);
    })
});

// SERVER
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});