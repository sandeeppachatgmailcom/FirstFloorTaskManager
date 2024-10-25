const taskCollection = require("../../schema/task")

const dropTask =async (task)=>{
    try {
        const {taskId,handledBy} = task
        const currtask =await taskCollection.findOne({taskId})
        if(!currtask) return {status:false,message:'there is no valid task in the given details '}
        if(currtask.handledBy != handledBy) return {status:false,message:'you cant drop a task which is not picked by you '}  
        const result =await taskCollection.updateOne({taskId},{$set:{handledBy:null}})
        if(result.modifiedCount) return {status:true,message:'you dropped the task '}
        else  return {status:false,message:'nothing happend  '}
    } catch (error) {
        return {status:false,message:error+'aaa'}        
    }
}
module.exports = dropTask