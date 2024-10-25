const pickTask = require("../../model/functions/task/pickTask")
const sanitizeBody = require("../../utils/sanitizeBody")

const postPickMyTask =async (req,res)=>{
    try {   
        const data = await sanitizeBody(req.body)
        const result = await pickTask(data)
        if(result) res.json(result)
            else res.json({status:false,message:'details not reachable ' })
        
    } catch (error) {
        res,json({status:false,message:error})
    }
}

module.exports = postPickMyTask