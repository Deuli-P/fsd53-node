import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import jwt from "jsonwebtoken";

dotenv.config();
const {
  APP_LOCALHOST: hostname,
  APP_PORT: port,
  JWT_SECRET: secret,
  JWT_EXPIRES: expiration
} = process.env;

const app = express();

app.use(session({
  name: 'simple',
  secret: 'simple',
  resave: false,
  saveUninitialized: true
}));

/**
 * Route principale (pour le confort de test de l'app)
 * Nul besoin de modifier cette route
 */
app.get("/", (req, res) => {
  res.send(`
    <style>html { font-size: 1.6rem; }</style>
    <h1>Routes de l'app</h1>
    <ul>
      <li><a href="/getToken">/getToken</a> (Crée un token et le met dans la session)</li>
      <li><a href="/clear">/clear</a> (Efface la session et le token)</li>
    </ul>

    <ul>
      <li><a href="/securedRoute">/securedRoute</a> (Route accessible uniquement avec un token valide dans la session)</li>
    </ul>
  `);
});


app.get('/getToken', (req, res) => {
  // …

  const payload = {
    userId: Date.now().toString(),
    email: "sam@sam.fr",
    role: "Admin"
  }

  // Je créé un token que j'ajoute à la session existante
  req.session.token = jwt.sign(payload, secret, { expiresIn: expiration })

  res.status(200).json({ token: req.session.token })

});

app.get('/clear', (req, res) => {

  req.session.destroy((err) => {
    if (err) return res.status(500).json({ error: err.message })

  })

  // console.log(req.session);

  res.status(200).json({ message: "Session and token cleared successfuly !" })

});

const authMiddleware = (req, res, next) => {
  // S'il n'y a pas de token (donc l'utilisateur n'est pas authentifié)
  if(!req.session.token){
    return res.status(401).json({
      error: "You should be logged to access to this route. Please get a token first."
    })
  }

  try {
    const tokenDecoded = jwt.verify(req.session.token, secret);
    console.log("Token is valid: ", req.session.token);
    req.user = tokenDecoded;
    next();

  } catch (err) {

      res.status(403).json({
        error:`Invalid token ${err.message}`
      })
  }

};

app.get('/securedRoute', authMiddleware, (req, res) => {

  console.log(req.user);

  res.status(200).json({ message: 'Access granted! Token is valid!' });
});

app.listen(port, () => {
  console.log(`App listening at http://${hostname}:${port}`);
});
