import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.status(200)
  res.send("hello")
})

export default app
