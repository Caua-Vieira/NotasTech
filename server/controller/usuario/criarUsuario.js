
function criarUsuario(req, res) {
    try {

        const {
            senha,
            email
        } = req.body



    } catch (error) {
        res.status(400).send({

        })
    }
}

module.exports = {
    criarUsuario
}