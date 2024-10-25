const express = require('express')
const postreadMyTask = require('../controller/task/postreadMyTask')
const postReadMyTeamTask = require('../controller/task/postreadMyTeamTask')
const postReadAllTask = require('../controller/task/postReadAllTask')
const postPickMyTask = require('../controller/task/postPickMyTask')
const postDroptask = require('../controller/task/postDroptask')
const postFinishtask = require('../controller/task/postFinishtask')
const postDeleteTask = require('../controller/task/postDeleteTask')
const postCreateTask = require('../controller/task/postCreateTask')
const error404 = require('../controller/error404')
const router = express.Router()
 
router.post('/readMyTask',postreadMyTask)
router.post('/readMyTeamTask',postReadMyTeamTask)
router.post('/readAllTask',postReadAllTask)
router.post('/pickMyTask',postPickMyTask)
router.post('/droptask',postDroptask)
router.post('/finishtask',postFinishtask)
router.post('/deleteTask',postDeleteTask)
router.post('/createTask',postCreateTask)



// handling  undefined api endpoints 
router.use(error404 )
module.exports = router 