let count = 0;

// Nombre maximales de tentatives
const MAX_ATTEMPTS = 10;

console.log("Le jeu commence maintenant, veuillez choisir un nombre entre 1 et 100");

// Je définis un chiffre aléatoire compris entre 0 et 100 (le +1 sert à aller à 100 étant donné que j'ai mis un Math.floor)
const searchNumber = Math.floor(Math.random() * 100 + 1)
console.log(searchNumber);

process.stdin.on("data", (chunk) => {


    const userNumber = parseInt(chunk)

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
        console.log("Veuillez entrer un nombre valide ");
        return;
    }

    if (count > MAX_ATTEMPTS) {
        console.log("Vous avez dépassé les tentatives autorisées");
        process.exit(0);
    }

    count++
    if (userNumber > searchNumber) {
        console.log("Votre nombre est trop grand");

    } else if (userNumber < searchNumber) {
        console.log("Votre nombre est trop petit");

    } else {

        console.log(`Vous avez trouvé le nombre ${searchNumber} en ${count} tentatives`);
        process.exit(0)

    }

})