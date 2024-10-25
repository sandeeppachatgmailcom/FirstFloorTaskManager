// @ts-ignore
/**
 * @swagger
 * /task/readMyTask:
 *   post:
 *     summary: Retrieve tasks assigned to the user
 *     description: Fetches all tasks assigned to the user based on the provided userId.
 *     tags:
 *       - task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The unique identifier of the user whose tasks are being retrieved.
 *                 example: "U67890"
 *     responses:
 *       '200':
 *         description: Tasks retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 tasks:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       taskId:
 *                         type: string
 *                         example: "T12345"
 *                       taskName:
 *                         type: string
 *                         example: "Complete project documentation"
 *                       designation:
 *                         type: string
 *                         example: "Manager"
 *                       createdDate:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-10-25T10:30:00Z"
 *                       taskDetails:
 *                         type: string
 *                         example: "Details about the project documentation task"
 *                       completed:
 *                         type: boolean
 *                         example: false
 *       '404':
 *         description: No tasks found for the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "No tasks found for the specified user"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */
