const shuffleUsers = (users) => {

let html = `<ul>`

// Tri par référence
// -0,5 et 0,5
users.sort((a, b) => Math.random() - 0.5)

// Tri de Fisher-Yates


// Boucle pour afficher sur la page HTML les utilisateurs modifiés
for(const user of users){
html += `<li> ${user} </li>`
}

html += `</ul>`

return html

}

module.exports = shuffleUsers;