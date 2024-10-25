const userCollection = require("../../schema/user");

const readMyteamTask = async (userId) => {
  try {
    const result = await userCollection.aggregate([
      {
        $match: {
          userId: userId // Match the current user
        }
      },
      {
        $graphLookup: {
          from: 'users',               // Collection name
          startWith: '$reportingHead', // Starting field
          connectFromField: 'userId',  // Connect from field
          connectToField: 'reportingHead', // Connect to field
          as: 'subordinates',          // Output array for subordinates
          depthField: 'level'          // Optional depth field
        }
      },
      {
        $lookup: {
          from: 'tasks',                // Tasks collection
          let: { subordinateIds: ['$userId', '$subordinates.userId'] }, // Include your own userId
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ['$createdBy', '$$subordinateIds'] // Match tasks created by you or subordinates
                }
              }
            }
          ],
          as: 'tasks'                  // Output array for tasks
        }
      },
      {
        $project: {
          tasks: 1,                    // Include the array of tasks
          _id: 0                        // Exclude the _id field from the result
        }
      }
    ]);

    console.log(result, 'result');
    return result;
  } catch (error) {
    console.error(error);
    throw error; // Handle the error appropriately
  }
};

module.exports = readMyteamTask;
