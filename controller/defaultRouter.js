const defaultRouter = (req,res)=>{
   try {
        res.json({status:true,message:'connection with firstFloor Machine Task success !!! '})
   } catch (error) {
    
   }
}

module.exports = defaultRouter