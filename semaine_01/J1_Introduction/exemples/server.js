// console.log("Hello ! ");
// ---------------------
// Importer un module
// CJS = CommonJS
// const module = require('moduleName');

// import { log } from "console";
// ESM = ESModule
// import Router from "react-router-dom"

// ------------------------------
// MODULE NATIF - OS
// ------------------------------

// Il faut charger le module OS

const os = require('os');

// Obtenir les informations de l'utilisateur

const { username } = os.userInfo()

// console.log(username);

// Version de l'os
// console.log(`Version: ${os.version()}`);

// Nom de la plateforme
// console.log(`Plateforme: ${os.platform()}`);

// console.log(os.uptime() / 3600);

//Le nombre de CPU
const cpus = os.cpus();
// console.log(cpus.length);

// ------------------------------
// MODULE NATIF - PROCESS
// Pas besoin de l'importer car il est fourni avec Node
// ------------------------------


// sdtin, stdout,stderr

// Stream std => Permet de capturer le flux d'un input via la console et de les renvoyer à notre script
// process.stdout.write(" Hello !");
// process.stderr.write("Error, it doesn't work !");
// process.exit(0)
// Gestion de la fin du process
// Méthode on
// Buffer

process.stdin.on("data", (chunk) => {
    // On récupère le flux et on le convertien chaine de caractères
    const text = chunk.toString();

    console.log("Text que j'ai écrit au dessus: " + text);

    // Mettre fin au processus
    process.exit(0)

})

// ------------------------------
// MODULE NATIF - FS
// File System
// ------------------------------

// Importer FS
const fs = require("fs");

// Ecrire dans un fichier

const data = "Salut à tous ! ";
// 3 arguments,nom du fichier, les données à insérer et une callback
// Approche asynchrone
// fs.writeFile("new_file.txt", data, (err) => {

//     if (err) throw err;

//     console.log("Le nouveau fichier a été créé avec succès.");

// })

// // Approche synchrone
// try {
// const newData = "Aurevoir et à la prochaine"
// fs.writeFileSync("new_file_sync.txt", newData )
// console.log("Nouveau fichier créé avec succès");

// } catch (err) {
// console.log(err);
// }

// Lire dans un fichier

// Approche asynchrone
fs.readFile("./new_file.txt", "utf-8", (err, data) => {
    if(err) throw err;

    console.log(data);

    // Terminer le processus dans le terminal
    process.exit(0)
})

// Approche synchrone
try {
const data = fs.readFileSync("./new_file_sync.txt", "utf-8")
console.log(data);
} catch (err) {
console.log(err);

}

// Pour supprimer un fichier
fs.unlink("delete.txt", (err) => {
if(err) throw err;

console.log("Fichier supprimer avec succès");

})