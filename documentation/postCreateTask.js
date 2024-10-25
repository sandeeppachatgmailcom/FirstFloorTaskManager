// @ts-ignore
/**
 * @swagger
 * /task/createTask:
 *   post:
 *     summary: Create a new task
 *     description: Endpoint to create a new task with details such as task name, designation, created date, user ID, and task details.
 *     tags:
 *       - task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               taskId:
 *                 type: string
 *                 description: Optional ID of the task.
 *                 example: "T12345"
 *               taskName:
 *                 type: string
 *                 description: Name of the task.
 *                 example: "Design Review"
 *               designation:
 *                 type: string
 *                 description: Designation associated with the task.
 *                 example: "Project Manager"
 *               createdDate:
 *                 type: string
 *                 format: date
 *                 description: The date when the task was created.
 *                 example: "2023-10-25"
 *               userId:
 *                 type: string
 *                 description: ID of the user who created the task.
 *                 example: "U12345"
 *               taskDetails:
 *                 type: string
 *                 description: Detailed description of the task.
 *                 example: "Complete the design review for the new project module."
 *     responses:
 *       '201':
 *         description: Task created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Task created successfully"
 *                 taskId:
 *                   type: string
 *                   example: "T12345"
 *       '400':
 *         description: Bad Request - Invalid input data
 *       '500':
 *         description: Internal server error
 */
