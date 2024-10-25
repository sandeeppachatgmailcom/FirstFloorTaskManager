// @ts-ignore
/**
 * @swagger
 * /user/signup:
 *   post:
 *     summary: Create a user (signup)
 *     description: Create a user with minimal details, including firstname, email, contact, referalCode, and password.
 *     tags:
 *       - user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 description: First name of the user.
 *                 example: "John"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email of the user. This is a unique field.
 *                 example: "john.doe@example.com"
 *               contact:
 *                 type: string
 *                 description: Contact number of the user.
 *                 example: "+1234567890"
 *               referalCode:
 *                 type: string
 *                 description: Referral code of the user, provided by the HR or senior authority, to register new user under them.
 *                 example: "REF123456"
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Password from the user. It should be a minimum of 8 characters and include alphanumeric values.
 *                 example: "P@ssw0rd1"
 *     responses:
 *       '200':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User created successfully"
 *                 userId:
 *                   type: string
 *                   example: "12345"
 *       '404':
 *         description: Email does not exist on the server
 *       '500':
 *         description: Internal server error
 */
