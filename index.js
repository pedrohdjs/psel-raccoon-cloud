require("dotenv").config()

const { Router } = require("express")
const helmet = require("helmet")

const auth = require("./src/middlewares/auth")
const actionRouter = require("./src/middlewares/actionRouter")
const headers = require("./src/middlewares/headers")

/*O uso de um router permite o encadeamento de middlewares,
dando mais flexibilidade e escalabilidade ao código*/
const main = Router()

main.use(helmet())
main.use(headers)
main.use(auth)
main.use(actionRouter)

exports.main = main
