const dropTask = require("../../model/functions/task/dropTask")
const sanitizeBody = require("../../utils/sanitizeBody")


const postDroptask = async (req,res)=>{
    try {
        const data = await sanitizeBody(req.body)
        const result = await dropTask(data) 
         
        res.json(result)
    } catch (error) {
        res.json({status:false,message:error})
    }
}

module.exports = postDroptask