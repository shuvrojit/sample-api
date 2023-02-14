import express from "express"
import router from "./routes"

const app = express()

app.get("/", (req, res) => {
  res.send("hello")
})

app.use("/api", router)

export default app
