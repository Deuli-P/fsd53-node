const shuffleUsers = (users) => {

let html = `<ul>`

// Tri par référence
// -0,5 et 0,5
//à ne pas utiliser lors de cas complexe de tri, mais très bien pour des tableaux de très petite longueur
users.sort((a, b) => Math.random() - 0.5)

// Tri de Fisher-Yates
// https://fr.wikipedia.org/wiki/M%C3%A9lange_de_Fisher-Yates#:~:text=Le%20m%C3%A9lange%20de%20Fisher%2DYates,m%C3%A9langer%20un%20ensemble%20d'objets.
// Plus robuste et "parfait"
    // for (let i = users.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [users[i], users[j]] = [array[j], array[i]];
    // }


// Boucle pour afficher sur la page HTML les utilisateurs modifiés
for(const user of users){
html += `<li> ${user} </li>`
}

html += `</ul>`

return html

}

module.exports = shuffleUsers;