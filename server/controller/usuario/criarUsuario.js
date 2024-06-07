const { connect } = require("../../config/database")

async function criarUsuario(req, res) {
    console.log("chegou")
    try {

        const pool = await connect()

        const {
            senha,
            email
        } = req.body

        console.log(senha)
        console.log(email)

        await pool.query(`
            insert into usuarios (email, senha, datacriacao)
            values ('${email}', ${senha}, now())
            `)

        res.status(200).send("Usuário criado com sucesso!")
    } catch (error) {
        console.log("erro" + error)
    }
}

module.exports = {
    criarUsuario
}