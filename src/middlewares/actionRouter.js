const controllers = require("../controllers")

/**
 * Middleware roteamento de ação. Utiliza o parâmetro
 * "action" da requisição para chamar o controller correto.
 * */
module.exports = function (req, res, next) {
    const action = req.query.action

    if (action in controllers) {
        controllers[action](req, res, next)
    } else {
        controllers.notFound(req, res, next)
    }

    // return next()
}
