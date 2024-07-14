import Express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import db from './db/db.js'
import router from './route/route.js'

const app=Express()
app.use(Express.json())
app.use(cors())
dotenv.config()
db()
app.use('/api/vi',router)
app.listen(process.env.PORT,(req,res)=>{
    console.log(`Port is ${process.env.PORT}`)
})