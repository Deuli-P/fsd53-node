const readline = require("readline");
const chalk = require("chalk");

// Déclaration des constantes du jeu

const ROCK = "pierre";
const SHEET = "feuille";
const CHISEL = "ciseaux";
const COUNT_MAX_PLAY = 5;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let stat = {
    same: 0,
    players: [0, 0],
    winner: ""
}

/**
 * Function who choice randomly for player and computer
 * @return value of random choice between ROCK, SHEET, CHISEL
 */
const choice = () => {

    const elements = [ROCK, SHEET, CHISEL];
    const randomChoice = Math.floor(Math.random() * elements.length)

    return elements[randomChoice]

}


// ====================================================================
//                       FONCTION PRINCIPALE
// ====================================================================
/**
 *Main function who will execute the game in the console
 */
const run = () => {

    stat.same = 0;
    stat.players = [0, 0];
    let count = 0;

    console.log(chalk.green.bold("The game begin, be ready . . ."));

    while (count < COUNT_MAX_PLAY) {

        // Décomposition
        const [choice1, choice2] = [choice(), choice()];

        // const choice1 = [choice()];
        // const choice2 = [choice()];

        console.log(
            chalk.yellow(`Tour ${count + 1}`) +
            chalk.green(`P1 - ${choice1}`) +
            chalk.red(`vs P2 - ${choice2}`)

        );

        if (choice1 === ROCK) {
            if (choice2 === CHISEL) {
                stat.players[0] += 1
                console.log(chalk.green("Player 1 win the round"));

            } else if (choice2 === SHEET) {
                stat.players[1] += 1
                console.log(chalk.red("Player 2 win the round"));

            }
        }

        if (choice1 === SHEET) {
            if (choice2 === ROCK) {
                stat.players[0] += 1
                console.log(chalk.green("Player 1 win the round"));

            } else if (choice2 === CHISEL) {
                stat.players[1] += 1
                console.log(chalk.red("Player 2 win the round"));

            }
        }

        if (choice1 === CHISEL) {
            if (choice2 === SHEET) {
                stat.players[0] += 1
                console.log(chalk.green("Player 1 win the round"));

            } else if (choice2 === ROCK) {
                stat.players[1] += 1
                console.log(chalk.red("Player 2 win the round"));

            }
        }

        count++
    }

}

// Fonction pour afficher les résultats
const showResult = () =>{
console.log(chalk.cyan("Summary of the game: "));

if(stat.players[0] > stat.players[1]) {
stat.winner = "Player 1"
}else if(stat.players[0] < stat.players[1]){
    stat.winner = "Player 2"
}else{
    stat.winner = "Draw"
}

console.table(stat)
console.log(chalk.magenta.bold(`The winner is : ${stat.winner}`));

}


run();
showResult();