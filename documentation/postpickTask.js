// @ts-ignore
/**
 * @swagger
 * /task/pickMyTask:
 *   post:
 *     summary: Pick a task
 *     description: Allows a user to pick a task that has not been assigned. Only tasks that are unassigned can be picked.
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
 *                 description: The unique identifier of the task to be picked.
 *                 example: "T12345"
 *               userId:
 *                 type: string
 *                 description: The identifier of the user attempting to pick the task.
 *                 example: "U67890"
 *     responses:
 *       '200':
 *         description: Task picked successfully
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
 *                   example: "You picked the task"
 *       '400':
 *         description: Task already picked or invalid request
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
 *                   example: "You can't pick a task that is already picked"
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
