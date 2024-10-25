const submitTask = require("../../model/functions/task/submitTask")
const sanitizeBody = require("../../utils/sanitizeBody")

const postFinishtask =async (req,res)=>{
    try {
        const data = await sanitizeBody(req.body)
        const result =  await submitTask(data)
        res.json(result)
    } catch (error) {
        res.json({status:false,message:error})    
    }
}
module.exports = postFinishtask