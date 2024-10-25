// @ts-ignore
/**
 * @swagger
 * /task/droptask:
 *   post:
 *     summary: Drop a task
 *     description: Allows a user to drop a task that they have picked. Only the user who picked the task can drop it.
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
 *                 description: The unique identifier of the task to be dropped.
 *                 example: "T12345"
 *               handledBy:
 *                 type: string
 *                 description: The identifier of the user attempting to drop the task.
 *                 example: "U67890"
 *     responses:
 *       '200':
 *         description: Task dropped successfully
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
 *                   example: "You dropped the task"
 *       '400':
 *         description: Invalid request due to missing or incorrect task ownership
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
 *                   example: "You can't drop a task that is not picked by you"
 *       '404':
 *         description: Task not found
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
 *                   example: "There is no valid task in the given details"
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
