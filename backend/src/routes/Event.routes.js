const {Router} = require("express")
const router = Router()


const authMiddleware = require("../middleware/auth.middleware")
const eventContoller = require("../controllers/event.contoller")



router.post("/create",authMiddleware,eventContoller.createEvent)

router.get("/",eventContoller.getAllEvent)

router.get("/:id",eventContoller.getSingleEvent)

router.delete("/:id",authMiddleware,eventContoller.deleteEvent)






module.exports= router