export const logout = (req, res) => {
    req.session.isLogged = false;

    req.session.destroy((err) => {
        res.redirect("/")
    })
}

export default logout