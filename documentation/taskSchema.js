/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         taskId:
 *           type: string
 *           description: Unique identifier for the task.
 *           example: "T12345"
 *         taskName:
 *           type: string
 *           description: Name of the task.
 *           example: "Design UI for the project"
 *         designation:
 *           type: string
 *           description: Designation related to the task.
 *           example: "UI Designer"
 *         taskDetails:
 *           type: string
 *           description: Detailed information about the task.
 *           example: "Create the user interface for the new project."
 *         createdDate:
 *           type: string
 *           format: date
 *           description: Date when the task was created.
 *           example: "2024-10-25"
 *         createdBy:
 *           type: string
 *           description: User who created the task.
 *           example: "john.doe@example.com"
 *         active:
 *           type: boolean
 *           description: Indicates if the task is active.
 *           default: true
 *         completed:
 *           type: boolean
 *           description: Indicates if the task is completed.
 *           default: false
 *         handledBy:
 *           type: string
 *           description: User who is handling the task.
 *           default: null
 *         deleted:
 *           type: boolean
 *           description: Indicates if the task is deleted.
 *           default: false
 *         submissionSummary:
 *           type: string
 *           description: Summary of the task submission.
 *           default: null
 *         completedBy:
 *           type: string
 *           description: User who completed the task.
 *           default: null
 *         priority:
 *           type: boolean
 *           description: Indicates if the task is a priority task.
 *           default: false
 */

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     description: Adds a new task to the task list.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       201:
 *         description: Task created successfully.
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Internal server error.
 */
