import express from "express";
import pug from "pug";

const app = express();

app.set("view engine", "pug")

app.get("/", (req, res) => {

res.render("home", {
    name: "Seyedpouya"
})

})

app.listen(8000,() => {
    console.log("Server is running at http://localhost:8000");

})