/**
 * @swagger
 * /admin/validateUser:
 *   post:
 *     tags:
 *       - admin
 *     summary: Validate and update user designation
 *     description: Validates a user by `userId`, checks if the user is active, and updates the user's designation. Assigns admin rights if the designation matches "DN10000010".
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The unique ID of the user to validate.
 *                 example: "U12345"
 *               designation:
 *                 type: string
 *                 description: The new designation of the user.
 *                 example: "DN10000010"
 *     responses:
 *       200:
 *         description: User validated and updated successfully.
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
 *                   example: "user approved with admin Power"
 *       400:
 *         description: Bad request, missing or invalid `userId` or `designation`.
 *       404:
 *         description: User not found.
 *       403:
 *         description: User is disabled by admin, edits not allowed.
 *       500:
 *         description: Internal server error.
 */
