import user from "../data/user.js";
import CryptoJS from "crypto-js";
export default function login(req, res) {

    const { login, password } = user;
    const { login: loginInput, password: passwordInput } = req.body

    // Sécurité
    if (
        loginInput.trim() === "" ||
        passwordInput.trim() === ""
    ) {
        return res.status(500).json({ message: "Veuillez remplir tous les champs" })
    }

    // 2207fbebda334645349de182320065a7d05928b9 =>
    // Dans l'input l'utilisateur insère la chaine de caractères : "samsara"

    const hashedPassword = CryptoJS.SHA1(passwordInput).toString()

    if (
        hashedPassword === password &&
        login.toLowerCase() === loginInput.toLowerCase()
    ) {
        // console.log("Informations correctes");
        req.session.isLogged = true;
        return res.redirect("/dashboard")

    }
    res.send()

}