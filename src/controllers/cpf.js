const fetchData = require("../util/fetchData")
const isCPFValid = require("../util/isCPFValid")

module.exports = async function (req, res, next) {
    try {
        const data = await fetchData()
        
        const count = data
                        .map((val) => val.cpf)
                        .filter(isCPFValid)
                        .length

        res.status(200).send({ count })
    } catch (err) {
        next(err)
    }
}
