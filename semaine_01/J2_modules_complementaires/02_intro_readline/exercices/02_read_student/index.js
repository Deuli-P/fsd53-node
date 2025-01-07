const readline = require("readline");
const fs = require("fs");

// On va lire les données JSON
const data = JSON.parse(fs.readFileSync("./Data/students.json"));

// Equivaut à data.students, simplifié avec la décomposition
const { students } = data;

// Créer l'interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.setPrompt("PROMPTOR > ")
rl.prompt();

rl.on("line", line => {

    line = line.trim().toString().toLowerCase()
    // On va vérifier si l'entrée est un nombre
    if (!isNaN(line)) {
        console.log("You must use only valid string !");
        rl.prompt();
        return;
    }


    // On va gérer l'arrêt du processus
    if (line === "stop" || line === "no") {
        rl.close();
        return;
    }

    // Vérifier si l'étudiant existe bien
    // Gérer la sensibilité à la casse
    const studentNames = students.map(s => s.name.toLowerCase());

    if (!studentNames.includes(line)) {
        console.log("Name is invalid, please fill correctly your prompt");
        rl.prompt();
        return;

    }

    // Calcul de la moyenne

    for (const student of students) {

        const { name, notes } = student;

        if (name.toLowerCase() === line) {


            const sum = notes.reduce((acc, curr) => acc + curr);
            const average = sum / notes.length

            // Gestion de la mention des étudiants
            let mention;
            if(average >= 10 && average < 12) mention = "Passable";
            else if(average >= 12 && average < 14) mention = "Assez bien";
            else if(average >= 14 && average < 16 ) mention = "Bien";
            else if(average >= 16 && average < 20) mention = "Très bien"
            else mention = "Aucune mention";


            console.log(`Average of ${name}: ${average}`);
            console.log(`Mention: ${mention}`);


            console.log("Do you want another student ?");
            rl.prompt();
            return;

        }


    }




}).on("close", () => {
    console.log("Sayonara !");
    // rl.close()
    process.exit(0)
})