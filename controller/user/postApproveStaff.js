const createClient = require("../../model/functions/users/createUser")
const sanitizeBody = require("../../utils/sanitizeBody")

const postApproveStaff = async (req, res) => {

    try {
        const inputData = await sanitizeBody(req.body)
        const result = await createClient(inputData)
        if (result) res.json({ status:result.status|| true, message:result.message|| 'User created successfully',userId:result.userId    })
        else res.json({ status: false, message: 'failed' })

    } catch (error) {
        res.json({ status: false, message: 'failed', error })
    }
}

module.exports = postApproveStaff