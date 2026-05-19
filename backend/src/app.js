const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors");

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: process.env.Front_Url||"http://localhost:5173",
  credentials: true,
}));

const authRoutes = require("./routes/auth.routes")
const eventRoutes = require("../src/routes/Event.routes")
const registerRoutes  = require("../src/routes/register.routes")

app.use("/api/auth",authRoutes)
app.use("/api/event",eventRoutes)
app.use("/api/register",registerRoutes)

module.exports = app
