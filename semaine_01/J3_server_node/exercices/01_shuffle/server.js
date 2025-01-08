const http = require('http');
const shuffleUsers = require("./src/utils");
require('dotenv').config();

const users = [
    'Alan',
    'Sophie',
    'Bernard',
    'Elie'
];

const server = http.createServer((req, res) => {

    const url = req.url;

    // Gestion de favicon
    if (url === "/favicon.ico") {
        res.writeHead(200, {
            "Content-Type": "image/x-icon"
        })
        res.end();
        return;
    }

    if (url === "/") {

        let html = `<ul>`

        for (const user of users) {
            html += `<li> ${user} </li>`;
        }

        html += `</ul>`

        res.setHeader("Content-Type", "text/html; charset=utf8")

        res.end(`<!DOCTYPE html>
    <html>
    <head>
    <title> Home </title>
    </head>
    <body>
    <a href="/"> HOME  </a>
    <a href="/shuffle"> SHUFFLE </a>
    ${html}
    </body>
    </html>
    `)
    } else if (url === "/shuffle") {

        res.setHeader("Content-Type", "text/html; charset=utf8")

        res.end(`<!DOCTYPE html>
        <html>
        <head>
        <title> Shuffle </title>
        </head>
        <body>
            <a href="/"> HOME  </a>
    <a href="/shuffle"> SHUFFLE </a>
        ${shuffleUsers(users)}
        </body>
        </html>
        `)

    } else {
        res.setHeader("Content-Type", "text/html; charset=utf8")

        res.end(`<!DOCTYPE html>
        <html>
        <head>
        <title> Not Found </title>
        </head>
        <body>
        <h1> Cette page est introuvable </h1>
            <a href="/"> HOME  </a>
    <a href="/shuffle"> SHUFFLE </a>
        </body>
        </html>
        `)
    }


})

server.listen(process.env.PORT || 8000, process.env.HOSTNAME, () => {
    console.log(`Server is running at http://${process.env.HOSTNAME}:${process.env.PORT}`);

})