import express from "express"
import { connectDB } from "./config/config.js"
import cors from "cors"

import ProductRouter from "./routes/route.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors("*"))
app.use("/", ProductRouter )


connectDB()

app.listen(5000, ()=>{
    console.log("Backend is running")
})