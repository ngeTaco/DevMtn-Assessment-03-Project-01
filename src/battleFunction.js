import axios from 'axios';

//NOTE: create url with a random number for pokeapi request
let randomPkmnNum = Math.floor(Math.random() * 1025) + 1;
let pkmnUrl = `https://pokeapi.co/api/v2/pokemon/${randomPkmnNum}`;

//NOTE: pokemon information to be stored in an object
let pkmnInfo = {};
//NOTE: GET pokemon data and destructure into Name, default Sprite, and Attack Stat
axios.get(pkmnUrl).then((response) => {
    pkmnInfo = response.data;
    const { name, sprites: { front_default }, stats: [, { base_stat }] } = pkmnInfo;
    console.log({ name, front_default, base_stat })
})

function rollPokemon() {
    let rolledPkmn = {}
    if (index = 0, index < 3, index++) {

    }
}

//roll for pokemon roll on button click
document.querySelector('#rollButton').addEventListener('click', e => {
    if (index = 0, index < 3, index++) {
        axios.get(pkmnUrl).then((response) => {
            document.querySelector('.rollName').innerText = response.data.name;
            document.querySelector('.rollImage').innerHTML = `<img src=${response.data.sprites.front_default} />`;
            document.querySelector('.rollAttack').innerText = response.data.stats[1].base_stat;
        })
    } then
});