const createAdminToken = require("../../middleware/createAdminToken")
const validateUser = require("../../model/functions/users/validateUser")
const sanitizeBody = require("../../utils/sanitizeBody")

const postValidateUser = async (req, res) => {
    try {
        const data = await sanitizeBody(req.body)
        const result = await validateUser(data?.userId, data?.designation)
        const token = createAdminToken(result?.email, result?.isAdmin)
        res.cookie('authToken', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 1000
        });
        res.json(result)

    } catch (error) {
        res.json({ status: true, message: error })
    }

}
module.exports = postValidateUser