const fetchData = require("../util/fetchData")

module.exports = async function (req, res, next) {
    try {
        const data = await fetchData()
        
        const value = data
                        .map((val) => val.salario)
                        .reduce((acc, val) => acc + val, 0)
                        
        res.status(200).send({value})
    } catch (err) {
        next(err)
    }
}
