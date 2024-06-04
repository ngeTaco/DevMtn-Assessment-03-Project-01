import axios from 'axios';

let randomPkmnNum = Math.floor(Math.random() * 1025) + 1;
let pkmnUrl = `https://pokeapi.co/api/v2/pokemon/${randomPkmnNum}`;

console.log(pkmnUrl);

axios.get(pkmnUrl).then((response) => {
    let pkmnName = response.data.name;
    let pkmnSprite = response.data.sprites.front_default;
    let pkmnAttack = response.data.stats[1].base_stat;

    console.log(pkmnName);
    console.log(pkmnSprite);
    console.log(pkmnAttack);
})