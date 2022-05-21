/**
 * Middleware de autenticação. Verifica se a requisição
 * recebida passou ou não uma chave e barra a requisição
 * no caso de nenhuma chave ou chave inválida.
 * */
module.exports = function (req, res, next) {
    const passedKey = req.headers.psel_key

    if (!passedKey) {
        return res
            .status(401)
            .send({ error: "Nenhuma chave de acesso especificada" })
    }

    if (passedKey !== process.env.ACCESS_KEY) {
        return res.status(401).send({ error: "Chave de acesso inválida" })
    }

    return next()
}
