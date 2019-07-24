const fetch = require('node-fetch');
const { json2xml } = require('./json2xml');
const fs = require('fs');

function save(data) {
  fs.writeFile('pokemon.xml', data, function(err) {
    if(err) {
      return console.log(err);
    }

    console.log('The file was saved!');
  });
}

function converAndSave(data) {
  const convertedData = json2xml(JSON.parse(data));
  save(convertedData);
}

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(res => res.text())
  .then(converAndSave);