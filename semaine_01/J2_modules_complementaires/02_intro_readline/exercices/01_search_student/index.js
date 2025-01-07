const readline = require("readline");

const students = ["Sibli", "Quentin", "Armance", "Laura", "Seyedpouya"];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt("PROMPTOR > ");
rl.prompt();


rl.on("line", line => {

    // sIbLi=>Sibli
    // Pour gérer la sensibilité à la casse
    const tempStudents = students.map(s => s.toLowerCase())
    const formattedLine = line.trim().toLowerCase()

    if (tempStudents.includes(formattedLine)) {
        console.log("Well played, you find it! ");

        rl.close()
        return;
    }

    console.log("Name doesn't match, try again . . .");

    rl.prompt();


}).on("close", () => {
    console.log("Sayonara !");

    rl.close()
    // process.exit(0)

})