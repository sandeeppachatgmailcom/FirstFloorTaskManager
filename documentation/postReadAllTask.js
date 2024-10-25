// @ts-ignore
/**
 * @swagger
 * /task/readAllTask:
 *   post:
 *     summary: Retrieve all tasks assigned to the user and their subordinates
 *     description: Fetches all tasks assigned by superiors and the work of subordinates for the given userId. This endpoint is useful for users to see their assigned tasks as well as those of their team.
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
 *                 description: ID of the user whose tasks and subordinates' tasks are being retrieved.
 *                 example: "U12345"
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
 *                         example: "Complete project report"
 *                       assignedTo:
 *                         type: string
 *                         example: "User123"
 *                       designation:
 *                         type: string
 *                         example: "Developer"
 *                       createdDate:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-10-25T10:30:00Z"
 *                       taskDetails:
 *                         type: string
 *                         example: "Review and finalize the project report."
 *                       completed:
 *                         type: boolean
 *                         example: false
 *       '400':
 *         description: Bad request due to missing or invalid userId
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
 *                   example: "Invalid userId"
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
