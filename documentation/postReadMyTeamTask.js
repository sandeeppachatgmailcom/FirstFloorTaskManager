// @ts-ignore
/**
 * @swagger
 * /task/readMyTeamTask:
 *   post:
 *     summary: Retrieve tasks assigned to the user's team
 *     description: Fetches all tasks assigned to members of the user's team based on the provided userId. This is helpful for managers or team leads who need an overview of team tasks.
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
 *                 description: The unique identifier of the user requesting team tasks.
 *                 example: "U67890"
 *     responses:
 *       '200':
 *         description: Team tasks retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 teamTasks:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       taskId:
 *                         type: string
 *                         example: "T12345"
 *                       taskName:
 *                         type: string
 *                         example: "Review project proposal"
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
 *                         example: "Complete review and submit feedback"
 *                       completed:
 *                         type: boolean
 *                         example: false
 *       '404':
 *         description: No tasks found for the team
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
 *                   example: "No tasks found for the specified team"
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
