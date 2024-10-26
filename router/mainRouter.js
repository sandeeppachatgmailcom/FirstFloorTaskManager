const express = require('express')
const router = express.Router()
const adminRouter =  require( './adminRouter') 
const userRouter =  require( './userRouter')
const taskRouter = require('./taskRouter')
const error404 = require('../controller/error404')
const swaggerDocs = require('../documentation/swagger')
const swaggerUi = require('swagger-ui-express');
const defaultRouter = require('../controller/defaultRouter')

// handling  swagger documentation 
router.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocs))
 

// handling custom routes  
router.use('/admin',adminRouter) 
router.use('/user',userRouter)
router.use('/task',taskRouter)

router.use('/',defaultRouter)

// handling  undefined api endpoints 
router.use(error404)



module.exports = router 
 