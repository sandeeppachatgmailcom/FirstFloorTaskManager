
const deleteTask = require("../../model/functions/task/deleteTask")
const sanitizeBody = require("../../utils/sanitizeBody")

const postDeleteTask = async (req, res) => {
    try {
        console.clear()
        const {taskId} = await sanitizeBody(req.body)
        const result = await deleteTask(taskId)
        if (result) res.status(200).json({ ...result })
        else res.status(200).json({ status: true, message: 'action failed ' })
    } catch (error) {
        res.status(200).json({ status: true, message: error })
    }
}
module.exports = postDeleteTask