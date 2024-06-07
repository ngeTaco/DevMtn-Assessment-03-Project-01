const rolledPkmn = [];
const userPkmn = [];


//Note: When function is called by click event, pull Pokemon Info from API, apply it to DOM, and save it in an array. Loop runs 3 times, once for each pokemon that is rolled for
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
            rolledPkmn[index] = pkmn;
        })
    }
}

//Note: add Pokemon to User's Team using index placement in HTML and from userPkmn array
function addToTeam(pokedata) {
    const targetIndex = userPkmn.length
    if (targetIndex > 5) {
        return;
    }
    userPkmn[targetIndex] = pokedata;
    document.querySelector(`#user${targetIndex} .userName`).innerText = pokedata.name;
    document.querySelector(`#user${targetIndex} .userImage`).src = pokedata.sprite;
    document.querySelector(`#user${targetIndex} .userAttack`).innerText = pokedata.attack;
}

//Note: Calculate combined Attack strength from userPkmn array
function calculateTotalAttack() {
    let totalAttack = 0;
    userPkmn.forEach(pkmn => totalAttack += pkmn.attack)
    document.querySelector('#userTotal').innerText = totalAttack;
    return totalAttack;
}

//Note: decideWinner checks length of userPkmn, if its 6 it will calculate winner based on userAttack, send an Alert and Reload the page
function decideWinner() {
    if (userPkmn.length === 6) {
        const userAttack = calculateTotalAttack();
        window.setTimeout(() => {
            if (userAttack >= 633) {
                alert('Winner, Winner, Chicken Dinner!')
            } else {
                alert('Try again, Loser!')
            } location.reload();
        }, 250)
    }
}

//Note: On click on a Rolled Pokemon, take index information and call addToTeam, Automatically roll new set of pokemon, calculate and print total, and check if a winner is decided
function handleRolledPkmn(event) {
    const targetPkmn = event.currentTarget.getAttribute('data-index');
    addToTeam(rolledPkmn[targetPkmn]);
    rollPokemon();
    calculateTotalAttack();
    decideWinner();
}

//Note: Listen for clicking on button to roll
document.querySelector('#rollButton').addEventListener('click', rollPokemon);
//Note: Listen for clicking on one of the rolled Pokemon
document.querySelectorAll('.rollPkmn').forEach(pkmn => pkmn.addEventListener(`click`, handleRolledPkmn))
