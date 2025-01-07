const fs = require("fs");

// 1. Lisez le fichier à l'aide de la méthode asynchrone.

let students = fs.readFileSync("./Data/students.txt", "utf-8").split(/\r?\n/)
// try {

//     // Petite vérification
//     // Que le tableau ne contient pas de chaine de caractères vide
//     students = students.filter(data => data !== "")

//     console.log(students)

// } catch (err) {
//     console.error(err);
// }


// // 2. Recherchez dans le tableau tous les étudiants qui ont eu plus de 17 de moyenne strictement.
// // { name : null, note : null, address : null};
// //Tableau pour stocker les meilleurs étudiants
// const topStudents = [];

// for (let line of students) {


//     line = line.split(" ")
//     // console.log(line);

//     // Boucle qui permet de parcourir la ligne (un seul student) et séparer chaque champ

//     for (let field of line) {
//         // console.log(field);

//         if (field > 17) {
//             topStudents.push({ note: line[0], name: line[1], address: line[2] })
//         }

//     }

// }
// console.log("Liste des étudiants ayant eu plus de 17: ");
// console.table(topStudents);


// // 3.Recherchez dans le tableau l'étudiant qui a eu la meilleur note.

// let bestNote = 0;
// let topStudent; // undefined

// // VERSION NON OPTIMISEE
// // for (let line of students) {

// //     line = line.split(" ")

// //     for (let field of line) {
// //         // Si le champ est un nombre
// //         if (!isNaN(field) && field > bestNote) {
// //             bestNote = parseInt(field)

// //         }
// //     }
// // }


// // // VERSION OPTIMISEE
// for (let line of topStudents) {
//     if (line.note > bestNote) {
//         bestNote = parseInt(line.note)
//         topStudent = line.name
//     }
// }

// console.log(`La meilleure note est de ${bestNote} obtenue par ${topStudent}`);

// // 4. Récupérez les données dans un objet student, puis ajoutez chaque étudiant dans un tableau students.

// let student = { name: null, note: null, address: null };
// let newStudents = [];

// for (let line of students) {

//     // Permet de séparer par colonnes (Note, Nom et Adresse)
//     const [note, name, address] = line.split(" ")

//     // Si je ne suis pas dans l'en-tête
//     if (note !== "Notes") {
//         newStudents.push({ note, name, address })

//     }

//     console.log(newStudents);

// }


// // 5. Ordonnez maintenant l'ensemble des données dans le tableau.

// // Trié par ordre décroissant (de la meilleur note à la moins bonne)
// newStudents.sort((a, b) => b.note - a.note)
// console.log(newStudents);

/* 6.BONUS - Ajoutez dans le fichier students.txt les étudiants suivants :

18 Sonia Paris
17 Clarisse Marseille

Lire le fichier lui-même et mettez chaque nom en majuscule */


// Tableau tampon pour stocker temporairement les étudiants
let tempArray = [];
let newArrayStudents = ["\n", "18 Sonia Paris", "\n", "17 Clarisse Marseille"];

let str = "";

for (let student of newArrayStudents) {
    try {
        // Ajouter chaque étudiant au fichier
        fs.appendFileSync("./Data/students.txt", student);

        // Lire le contenu actuel du fichier
        tempArray = fs.readFileSync("./Data/students.txt", "utf-8").split(/\r?\n/);

        str = "";

        for (let line of tempArray) {

            if (line.trim() === "") continue;

            // Séparer les colonnes (Note, Nom et Adresse)
            const [note, name, address] = line.split(" ");

            // Transformer les noms en majuscules
            if (note) {
                str += `${note} ${name.toUpperCase()} ${address}\n`;
            }
        }


        fs.writeFileSync("./Data/students.txt", str);
    } catch (err) {
        console.error(err);
    }
}