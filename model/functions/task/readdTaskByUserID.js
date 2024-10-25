const userCollection = require("../../schema/user");

const readTaskByUserId = async (userId) => {
  try {
    const result = await userCollection.aggregate([
      {
        $match: {
          userId: userId
        }
      },
      {
        $graphLookup: {
          from: 'users',              
          startWith: '$reportingHead',  
          connectFromField: 'reportingHead', 
          connectToField: 'userId',      
          as: 'superiors',           
          depthField: 'level'         
          
        }
      },
      {
        $lookup: {
          from: 'tasks',                
          let: { superiorsIds: '$superiors.userId' }, 
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $in: ['$createdBy', '$$superiorsIds'] }, 
                    { $eq: ['$designation', '$designation'] }  
                  ]
                }
              }
            }
          ],
          as: 'superiorTasks'           
        }
      },
      {
        $project: {
          superiorTasks: 1,
          _id: 0              
        }
      }
    ]);

    console.log(result, 'result');
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = readTaskByUserId;
