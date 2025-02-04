import express from "express";
import path from "path"
import session from "express-session";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// ==========
// App middlewares
// ==========

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    name: "simple",
    secret: "mysecret",
    resave:false,
    saveUninitialized: true,

}))

app.all("*", (req, res) => {
req.session.azerty = "Coucou Sibli"
    console.log(req.session);
})


app.listen(8000, () => {
    console.log("Server is running at http://localhost:8000");

})