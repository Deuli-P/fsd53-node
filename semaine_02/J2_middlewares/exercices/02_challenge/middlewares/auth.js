const auth = (req, res, next) => {


    // Si l'utilisateur n'est pas authentifié, on le redirige vers la page d'accueil
    if (!req.session.isLogged) {
        req.session.message = "Vous devez être connecté"
        return res.redirect("/")
    }

    // SI l'utilisateur est connecté, on lui affiche un messageet on passe au controlleur

    req.session.message = "Bienvenue";
    next();

}

export default auth;