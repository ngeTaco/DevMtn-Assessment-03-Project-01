const opponentPkmn = [];

//Note: Add up and print Enemy Total Attack
function calculateTotalAttackForOpponent() {
    let totalAttack = 0;
    opponentPkmn.forEach(pkmn => totalAttack += pkmn.attack);
    document.querySelector('#oppTotal').innerText = totalAttack;
}

//Note: When function is called by click event, pull Pokemon Info from API, apply it to DOM, and save it in an array. Loop runs 3 times, once for each pokemon that is rolled for
function rollOpponentPokemon() {
    for (let index = 0; index < 6; index++) {
        let randomPkmnNum = Math.floor(Math.random() * 1025) + 1;
        let pkmnUrl = `https://pokeapi.co/api/v2/pokemon/${randomPkmnNum}`;
        axios.get(pkmnUrl).then((response) => {
            document.querySelector(`#opponent${index} .oppName`).innerText = response.data.name;
            document.querySelector(`#opponent${index} .oppImage`).src = response.data.sprites.front_default;
            document.querySelector(`#opponent${index} .oppAttack`).innerText = response.data.stats[1].base_stat;

            let oppPkmn = {
                index: index,
                name: response.data.name,
                sprite: response.data.sprites.front_default,
                attack: response.data.stats[1].base_stat
            }
            opponentPkmn[index] = oppPkmn;
            calculateTotalAttackForOpponent();
        })
    }
}

//Note: Listen for clicking on button to roll
document.querySelector('#rollOpponentButton').addEventListener('click', rollOpponentPokemon);