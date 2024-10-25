const readTaskByUserId = require("../../model/functions/task/readdTaskByUserID");
const sanitizeBody = require("../../utils/sanitizeBody");

const postreadMyTask = async (req, res) => {
    try { 
      const data =await sanitizeBody(req.body)
      const result = await readTaskByUserId(data.userId)
      res.json(result[0]?.superiorTasks||[])
    } catch (error) {
      res.json({message:error})
    }
  };
  module.exports = postreadMyTask;
  