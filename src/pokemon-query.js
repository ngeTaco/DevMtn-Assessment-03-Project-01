import axios from 'axios';

//NOTE: create url with a random number for pokeapi request
let randomPkmnNum = Math.floor(Math.random() * 1025) + 1;
let pkmnUrl = `https://pokeapi.co/api/v2/pokemon/${randomPkmnNum}`;

//console.log(pkmnUrl);

//NOTE: pokemon information to be stored in an object
let pkmnInfo = {};
//NOTE: GET pokemon data and destructure into Name, default Sprite, and Attack Stat
axios.get(pkmnUrl).then((response) => {
    pkmnInfo = response.data;
    const { name, sprites: { front_default }, stats: [, { base_stat }] } = pkmnInfo;
    console.log({ name, front_default, base_stat })

    // let pkmnName = response.data.name;
    // let pkmnSprite = response.data.sprites.front_default;
    // let pkmnAttack = response.data.stats[1].base_stat;

    // console.log(pkmnName);
    // console.log(pkmnSprite);
    // console.log(pkmnAttack);
})