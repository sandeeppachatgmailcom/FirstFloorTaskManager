const createtask = require("../../model/functions/task/createNewTask")
const sanitizeBody = require("../../utils/sanitizeBody")

 

const postCreateTask =async (req,res)=>{
    try {
         console.clear()
        const data =await sanitizeBody(req.body)
        const result = await createtask(data)
        if(result)res.status(200).json({...result})
            else res.status(200).json({status:true,message:'action failed '})
    } catch (error) {
        
    }
}


module.exports = postCreateTask