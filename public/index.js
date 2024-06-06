//NOTE: roll for pokemon roll on button click
const rolledPkmn = []
const userPkmn = [];

function rollPokemon() {
    for (let index = 0; index < 3; index++) {
        let randomPkmnNum = Math.floor(Math.random() * 1025) + 1;
        let pkmnUrl = `https://pokeapi.co/api/v2/pokemon/${randomPkmnNum}`;
        axios.get(pkmnUrl).then((response) => {
            document.querySelector(`#roll${index} .rollName`).innerText = response.data.name;
            document.querySelector(`#roll${index} .rollImage`).src = response.data.sprites.front_default;
            document.querySelector(`#roll${index} .rollAttack`).innerText = response.data.stats[1].base_stat;
            let pkmn = {
                index: index,
                name: response.data.name,
                sprite: response.data.sprites.front_default,
                attack: response.data.stats[1].base_stat
            }
            rolledPkmn[index] = pkmn
        })
    }
}

document.querySelector('#rollButton').addEventListener('click', rollPokemon);

function handleRolledPkmn(event) {
    const targetPkmn = event.currentTarget.getAttribute('data-index');
    addToTeam(rolledPkmn[targetPkmn])
}

let selectPkmn = document.querySelectorAll('.rollPkmn').forEach(pkmn => pkmn.addEventListener(`click`, handleRolledPkmn))

//TODO: create function with 2 params, 1: pokedata to populate 2:target index

function addToTeam(pokedata) {
    userPkmn[userPkmn.length] = pokedata
    document.querySelector(`#user${index} .userName`).innerText = pokedata.name;
    document.querySelector(`#user${index} .userImage`).src = pokedata.sprite;
    document.querySelector(`#user${index} .userAttack`).innerText = pokedata.attack;
}