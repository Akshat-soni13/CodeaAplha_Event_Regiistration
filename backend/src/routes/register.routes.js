const { Router } = require("express");

const router = Router();


const authMiddleware = require("../middleware/auth.middleware")
const registerController = require("../controllers/register.contoller")



router.post("/:eventId",authMiddleware,registerController.registerEvent)

router.get("/My-registration",authMiddleware,registerController.getMyregistration)

router.delete("/:id",authMiddleware,registerController.cancleRegistration)

module.exports = router 