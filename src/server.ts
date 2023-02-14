import express from "express"
import router from "./routes"
import morgan from "morgan"
import cors from "cors"
import { protect } from "./modules/auth"
import { createNewUser, signin } from "./handlers/user"

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    req.secret_sh = "now"
    next()
})

app.get("/", (req, res) => {
    res.send("hello")
})

app.use("/api", protect, router)

app.use("/user", createNewUser)
app.use("/signin", signin)


export default app
