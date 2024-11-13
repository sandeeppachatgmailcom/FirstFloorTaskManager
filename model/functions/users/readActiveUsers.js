const user = require('../../schema/user')

const readActiveUsers =async  ()=>{
    try {
        console.log('test call at repo')
        const result = await user.find({ deleted:false})
        return { status:true,message:'success',data:result}
    } catch (error) {
        
    }
} 
module.exports = readActiveUsers