import axios from 'axios';

let randomPkmnNum = Math.floor(Math.random() * 1025) + 1;
let pkmnUrl = `https://pokeapi.co/api/v2/pokemon/${randomPkmnNum}`;

console.log(pkmnUrl);