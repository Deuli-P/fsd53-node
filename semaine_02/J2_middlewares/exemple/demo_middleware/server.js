import express from "express";
import {myMiddleware, middlewareWithArgs} from "./middleware.js";

const app = express();

app.use(myMiddleware);
app.use(middlewareWithArgs("Salut, voici comment appeler un middleware avec un argument"))



app.listen(8000, () => {
    console.log("Server is running at http://localhost:8000");

})