/**
 * Middleware de headers. Adiciona os headers fixos
 * à resposta.
 * */
module.exports = function (req, res, next) {
    res.header("Content-Type", "application/json")
    return next()
}
