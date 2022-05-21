const fetchData = require("../util/fetchData")
const getUF = require("../util/getUF")

module.exports = async function (req, res, next) {
    try {
        const data = await fetchData()
        
        const ufs = data
                        .map(({cpf}) => {
                            return {
                                cpf,
                                uf: getUF(cpf)
                            }
                        })

        res.status(200).send(ufs)
    } catch (err) {
        next(err)
    }
}
