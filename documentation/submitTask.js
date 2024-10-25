// @ts-ignore
/**
 * @swagger
 * /task/finishtask:
 *   post:
 *     summary: Submit and finish a task
 *     description: Submits a task with a summary and marks it as completed.
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
 *                 description: The unique identifier of the task to be submitted.
 *                 example: "T12345"
 *               submissionSummary:
 *                 type: string
 *                 description: A summary of the submission for the task.
 *                 example: "Completed the task successfully."
 *               completedBy:
 *                 type: string
 *                 description: The identifier of the user who completed the task.
 *                 example: "U67890"
 *     responses:
 *       '200':
 *         description: Task submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Task submitted"
 *       '400':
 *         description: Bad request due to missing required fields
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
 *                   example: "Narration required"
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
