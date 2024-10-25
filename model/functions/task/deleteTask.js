const taskCollection = require("../../schema/task")

const deleteTask =async  (taskId)=>{
    try {
        const result = await taskCollection.updateOne({taskId},{$set:{deleted:true,active:false}})
        if(result.modifiedCount) return {status:true,message:'task deletion success '}
        else return {status:false,message:'no task exist '}

    } catch (error) {
        return {status:false,message:error}
    }
}

module.exports = deleteTask