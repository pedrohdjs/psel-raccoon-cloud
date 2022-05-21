/**
 * Middleware de gerenciamento de erros. Deve ser colocado
 * no fim da cadeia de middlewares.
 * */
module.exports = function (err, req, res, next) {
    console.log(err)
    if (err.status) {
        res.status(err.status).send({ error: err.message })
    } else {
        res.status(500).send({ error: "Erro interno no servidor" })
    }
}
