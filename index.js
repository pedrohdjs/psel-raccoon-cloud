require("dotenv").config()

const { Router } = require("express")
const morgan = require("morgan")
const helmet = require("helmet")

const headers = require("./src/middlewares/headers")
const auth = require("./src/middlewares/auth")
const actionRouter = require("./src/middlewares/actionRouter")
const errorHandler = require("./src/middlewares/errorHandler")

/*O uso de um router permite o encadeamento de middlewares,
dando mais flexibilidade e escalabilidade ao código*/
const main = Router()

main.use(morgan("combined"))
main.use(helmet())
main.use(headers)
main.use(auth)
main.use(actionRouter)
main.use(errorHandler)


exports.main = main
