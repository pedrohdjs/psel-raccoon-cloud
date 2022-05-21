module.exports = function (req, res, next) {
    res.status(404).send({ error: "A ação solicitada não foi encontrada." })
}
