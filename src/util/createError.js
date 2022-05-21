/**
 * Factory Method que cria um objeto de erro com o
 * status e a mensagem de erro recebidos.
 */
module.exports = function (status, message) {
    const error = new Error(message)
    error.status = status
    return error;
}
