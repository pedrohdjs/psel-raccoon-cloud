const fetch = require("cross-fetch")
const createError = require("./createError")

/**
 * Obtém os dados da fonte especificada na variável de ambiente 
 * DATA_URL
 *  */ 
module.exports = async function () {
    const url = process.env.DATA_URL
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
    } catch (err) {
        throw createError(503, "Falha ao acessar a fonte de dados")
    }
}
