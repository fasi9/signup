const express = require("express")
const authRouter = require("./routes/auth")
const databaseConnection = require("./database")
const app = express()
databaseConnection()
require("dotenv").config()

app.use(express.json())
app.use("/auth",authRouter)

app.listen(process.env.PORT,()=>{
    console.log(`application Started at ${process.env.PORT}`);
})