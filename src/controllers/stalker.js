const fetchData = require("../util/fetchData")

module.exports = async function (req, res, next) {
    try {
        const data = await fetchData()
        
        const pessoas = data
                        .filter(val => (val.cargo === "COORDENADOR" && val.estado_civil === "SOLTEIRO"))
                        .map(({nome, cpf}) => ({nome, cpf}))
                        
        res.status(200).send(pessoas)
    } catch (err) {
        next(err)
    }
}
