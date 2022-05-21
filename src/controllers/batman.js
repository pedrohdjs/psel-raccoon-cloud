const fetchData = require("../util/fetchData")

module.exports = async function (req, res, next) {
    try {
        const data = await fetchData()
        
        const batman = data
                        .filter(val => (val.nome === "Bruce Wayne"))
                        .map(({nome, salario}) => ({nome, salario}))[0]
                        
        res.status(200).send(batman)
    } catch (err) {
        next(err)
    }
}
