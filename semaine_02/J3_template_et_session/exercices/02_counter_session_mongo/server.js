import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import session from "express-session";
import MongoStore from "connect-mongo";

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
app.use(session({

  name: "counter",
  secret: "mysecret",
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/fsd53" }),
  cookie: { maxAge: 180 * 60 * 1000 }

}))


app.use(express.static(path.join(__dirname, "public")));

// ==========
// App routes
// ==========

app.get("/", (req, res) => {

  if (req.session.count) {
    req.session.count++;
  }else{
    req.session.count = 1;
  }


res.json({ count: req.session.count })


});


app.get("/delete", (req,res) =>{

  req.session.count = 0;

  res.redirect("/");
})

// ==========
// App start
// ==========

app.listen(port, () => {
  console.log(`App listening at http://${hostname}:${port}`);
});
