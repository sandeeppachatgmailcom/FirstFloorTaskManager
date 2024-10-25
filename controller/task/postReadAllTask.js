const readTaskByUserId = require("../../model/functions/task/readdTaskByUserID");
const readMyteamTask = require("../../model/functions/task/readMyteamTask");


const postReadAllTask = async (req, res) => {
    try { 
      const data =await sanitizeBody(req.body)
      const myTask = await readTaskByUserId(data.userId)
      const mySubTask = await readMyteamTask(data.userId)
      const result = [...myTask[0]?.superiorTasks,mySubTask[0]?.tasks || []]
      res.json(result)
    } catch (error) {
      res.json({message:error})
    }
  };
module.exports = postReadAllTask