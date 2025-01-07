const readline = require("readline");

// Il faut créer une interface pour gérer les E/S (entrées et sorties) I/O

const rl = readline.createInterface({
    input: process.stdin,
    outpout: process.stdout
})

// rl.question("How are you today ?", (answer) => {
// console.log(`This is your answer : ${answer}`);

// // Il faut cloturer le processus d'écoute
// rl.close()

// })

rl.setPrompt("SAM >")
rl.prompt();

// Pour capturer les événements de la console
rl.on("line", (line) => {

    switch(line.trim()){
        case "Bocar":
            console.log(`Bonjour ${line}, tu es bien administrateur`);
        break;
        default: console.log("Tu dois être administrateur pour échanger dans la console");

    }
    rl.prompt()
}).on("close", () =>{
console.log("Sayonara !");
// process.exit(0)
rl.close()

})