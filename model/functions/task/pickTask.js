const taskCollection = require("../../schema/task")
const userCollection = require("../../schema/user")

const pickTask =async (task)=>{
    try {
        const {taskId,userId} = task
        const currtask =await taskCollection.findOne({taskId})
        if(!currtask) return {status:false,message:'there is no valid task in the given details '}
        if(currtask.handledBy ) return {status:false,message:'you cant pick a task which is already picked  '}  
        const user =await userCollection.findOne({userId,isActive:true})
        if(!user) return {status:false,message:'your id is not valid   '}  
        const result =await taskCollection.updateOne({taskId},{$set:{handledBy:userId}})
        if(result.modifiedCount) return {status:true,message:'you picked the task '}
        else  return {status:false,message:'nothing happend  '}
    } catch (error) {
        return {status:false,message:error+'aaa'}        
    }
}
module.exports = pickTask