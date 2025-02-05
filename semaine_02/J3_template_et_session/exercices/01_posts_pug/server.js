import express from "express";
import path from "path";
import { fileURLToPath } from "url";


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
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


const posts = [
  { title : "Pug", date : "2022-04-21"},
  { title : "Express", date : "2022-04-22"},
  { title : "Node.js", date : "2022-04-23"},
];

// ==========
// App routes
// ==========

app.get("/", (req, res) => {
res.render("posts/index", {posts})
});

// ==========
// App start
// ==========

app.listen(port, () => {
  console.log(`App listening at http://${hostname}:${port}`);
});
