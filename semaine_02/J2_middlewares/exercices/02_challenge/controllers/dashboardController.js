import { getViewsPath } from "../utils/utils.js";

export default function dashboardController(req, res) {

    res.sendFile("dashboard.html", { root: getViewsPath() })
}