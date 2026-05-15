const express = require("express")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())

app.use(cookieParser())


const authRoutes = require("./routes/auth.routes")
const eventRoutes = require("../src/routes/Event.routes")

app.use("/api/auth",authRoutes)
app.use("/api/event",eventRoutes)



module.exports = app
