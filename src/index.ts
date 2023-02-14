import * as dotenv from "dotenv"
import app from "./server"

dotenv.config()

app.listen(8000, () => {
    console.log("server is running")
})
