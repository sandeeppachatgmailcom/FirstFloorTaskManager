const readMyteamTask = require("../../model/functions/task/readMyteamTask")
const sanitizeBody = require("../../utils/sanitizeBody")

const postReadMyTeamTask =async (req, res) => {
    try { 
        const data =await sanitizeBody(req.body)
        const result = await readMyteamTask(data.userId)
        res.json(result[0]?.tasks || [] )
      } catch (error) {
        res.json({message:error})
      }
}
module.exports = postReadMyTeamTask