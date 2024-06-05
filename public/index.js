//NOTE: roll for pokemon roll on button click
function rollPokemon() {
    for (let index = 0; index < 3; index++) {
        let randomPkmnNum = Math.floor(Math.random() * 1025) + 1;
        let pkmnUrl = `https://pokeapi.co/api/v2/pokemon/${randomPkmnNum}`;
        axios.get(pkmnUrl).then((response) => {
            console.log(response.data)
            document.querySelector('.rollName').innerText = response.data.name;
            document.querySelector('.rollImage').src = response.data.sprites.front_default;
            document.querySelector('.rollAttack').innerText = response.data.stats[1].base_stat;
            console.log(response.data.name);
        })
    }
}

document.querySelector('#rollButton').addEventListener('click', rollPokemon );