const fetchData = require("../util/fetchData")

module.exports = async function (req, res, next) {
    try {
        const data = await fetchData()

        /*Nota: Essa operação pode ser otimizada de O(n*logn) para O(n)
        (tempo de execução) se for usada uma operação com reduce ao 
        invés da ordenação. A ordenação é menos performática, mas deixa 
        o código mais conciso e legível.*/
        const nome = data
                        .sort((a, b) => { //Ordenação decrescente por salario
                            return b.salario - a.salario
                        })[1]
                        .nome

        res.status(200).send({ nome })
    } catch (err) {
        console.log(err)
        next(err)
    }
}
