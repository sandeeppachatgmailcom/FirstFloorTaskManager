const mongoose = require("mongoose");


const taskSchema = mongoose.Schema({
        taskId:{type:String,unique:true},
        taskName:{type:String},
        designation:{type:String,required:true},
        taskDetails:{type:String },
        createdDate:{type:Date,required:true},
        createdBy:{type:String,required:true},
        active:{type:Boolean,required:true,default:true},
        completed:{type:Boolean,required:true,default:false},
        handledBy:{type:String,default:null},
        deleted:{type:Boolean,required:true,default:false},
        submissionSummary:{type:String,default:null},
        completedBy:{type:String,default:null},
        priority:{type:Boolean,default:false}
})

const taskCollection  = mongoose.model('task',taskSchema)

module.exports = taskCollection