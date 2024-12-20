const createAdminToken = require("../../middleware/createAdminToken")
const userLogin = require("../../model/functions/users/login")

const postuserLogin = async (req,res)=>{
    const {email,password} = req.body
    

    const result =  await userLogin(email,password)
    const token = createAdminToken(result?.email,result?.isAdmin)
    res.cookie('authToken', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 1000  
        });
    res.json(result)
}


module.exports = postuserLogin