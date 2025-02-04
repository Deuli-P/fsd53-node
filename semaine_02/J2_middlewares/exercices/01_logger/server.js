import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { logger, requestCounter } from "./middlewares.js";

// ==========
// App initialization
// ==========

const hostname = 'localhost';
const port = 8000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// ==========
// App middlewares
// ==========

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(requestCounter);
app.use(logger);

// ==========
// App routes
// ==========

app.all("*", (req, res) => {
res.status(200).send(`

 <a href="/">/</a><br>
 <a href="/app">/app</a><br>
 <a href="/app/Seyedpouya">/app/Seyedpouya</a><br>
 <a href="/app/Laura?lang=fr">/app/Laura?lang=fr</a><br>
 <form action="/app/create" method="post">
  <input type="text" name="name">
  <button> POST /app/create </button>
 </form>

  `)
})

// ==========
// App start
// ==========

app.listen(port, () => {
  console.log(`App listening at http://${hostname}:${port}`);
});
