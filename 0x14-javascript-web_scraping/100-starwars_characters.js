#!/usr/bin/node

/**
* Prints out who is playing
*/

const req = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];
req(url, function (error, response, body) {
  if (error) console.log(error);
  else {
    const character = JSON.parse(body).characters;
    character.forEach((character) => {
      req(character, function (error, response, body) {
        if (error) console.log(error);
        else console.log(JSON.parse(body).name);
      });
    });
  }
});
