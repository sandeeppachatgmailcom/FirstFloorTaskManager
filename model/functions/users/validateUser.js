const userCollection = require("../../schema/user")

const validateUser = async (userId,designation)=>{
    try {
             
            const result =await userCollection.findOne({userId,deleted:false})
            if(!result) return {status:false,message:'no user exist in this id'}
            if(!result.isActive) return {status:false,message:'user disabled by the admin, no edit possible'}
            const oper = await userCollection.updateOne({userId},{$set:{designation:designation,isAdmin:designation== 'DN10000010'?true:false}})
            if(oper.modifiedCount) return {status:true,isAdmin:designation== 'DN10000010'?true:false ,message:'user approved' }
            else return {status:false,message:'no updates done' }
            
    } catch (error) {
        return {status:false,message:error }
    }
}

module.exports = validateUser