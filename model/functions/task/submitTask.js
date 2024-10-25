const taskCollection = require("../../schema/task")
const userCollection = require("../../schema/user")

const submitTask = async (task)=>{
    try {
        const {submissionSummary, completedBy,taskId}   = task 
        if(!submissionSummary ||  !completedBy || !taskId) return {status:false,message:!submissionSummary? 'narration required ':'' +!completedBy?'userinfo missing':''+ !taskId ? 'task info missing':''}
        const user =  await userCollection.findOne({userId: completedBy})
        if( !user) return {status:false,message:'not a valid user '}
        const result = await taskCollection.updateOne({taskId},{$set:{submissionSummary,completedBy,active:false,completed:true}}) 
        if (result.modifiedCount) return {status:true,message:'task submitted '}
        else return  {status:false,message:'no task in the above details  '} 
    } catch (error) {
        return  {status:false,message:error } 
    }
}

module.exports = submitTask