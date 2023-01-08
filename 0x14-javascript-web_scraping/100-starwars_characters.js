#!/usr/bin/node

/**
* Prints out who is playing
*/

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];
request(url, function (error, response, body) {
  if (error) console.log(error);
  else {
    const character = JSON.parse(body).character;
    character.forEach((character) => {
      request(character, function (error, response, body) {
        if (error) console.log(error);
        else console.log(JSON.parse(body).name);
      });
    });
  }
});
