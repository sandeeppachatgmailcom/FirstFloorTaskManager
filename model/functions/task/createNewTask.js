const designationCollection = require("../../schema/designation");
const taskCollection = require("../../schema/task");
const userCollection = require("../../schema/user");
const getSerialNumber = require("../serialNumbers/getSerialNumber");

const createTask = async (data) => {
    try {
        let { taskId, taskName, designation, createdDate, userId, taskDetails } = data;
        const designationExist = await designationCollection.findOne({designationId:designation });
        const createdByExist = await userCollection.findOne({ userId });
        if (!designationExist) {
            return { status: false, message: 'Designation is not valid' };
        } else if (!createdByExist) {
            return { status: false, message: 'User is not valid' };
        }

        if (!taskId) {
            taskId = await getSerialNumber('task');
        }

        createdDate = createdDate || new Date();

        if (!taskId || !taskName || !designation) {
            return { status: false, message: 'Missing required credentials' };
        }

        const taskDescription = {
            taskId,
            taskName,
            designation,
            createdDate,
            taskDetails,
            createdBy: userId,
            active: true,
            completed: false
        };

        const result = await taskCollection.updateOne(
            { taskId },
            { $set: taskDescription },
            { upsert: true }
        );

        if (result.upsertedCount) {
            return { ...taskDescription, status: true, message: 'Task created successfully' };
        } else if (result.modifiedCount) {
            return { ...taskDescription, status: true, message: 'Task updated successfully' };
        } else if (result.acknowledged) {
            return { ...taskDescription, status: true, message: 'No changes detected' };
        }

        return { status: false, message: 'Task creation or update failed' };
    } catch (error) {
        console.error('Error in createTask:', error);
        return { status: false, message: 'Internal server error' };
    }
};

module.exports = createTask;
