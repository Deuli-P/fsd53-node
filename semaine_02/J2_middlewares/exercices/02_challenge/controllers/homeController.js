
import { getViewsPath } from "../utils/utils.js";

export default function homeController(req, res) {
    console.log(req.session);

    if (req.session.isLogged) {
        return res.redirect("/dashboard")
    }

    res.sendFile("login.html", { root: getViewsPath() })

};
