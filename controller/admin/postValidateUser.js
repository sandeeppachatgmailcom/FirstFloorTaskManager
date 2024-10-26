const createAdminToken = require("../../middleware/createAdminToken")
const validateUser = require("../../model/functions/users/validateUser")
const sanitizeBody = require("../../utils/sanitizeBody")

const postValidateUser = async (req,res)=>{
    try {
        const data =await sanitizeBody(req.body)
        const result = await validateUser(data?.userId,data?.designation)
        if(result?.isAdmin){
            createAdminToken(data?.email,result?.isAdmin)
        } 
        res.json( result)
 
    } catch (error) {
        res.json({status:true,message:error})
    }

}
module.exports = postValidateUser