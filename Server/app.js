import Express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import db from './db/db.js'
import router from './route/route.js'
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app=Express()
app.use(Express.json())
app.use(cors())
dotenv.config()
db()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use('/upload', Express.static(path.join(__dirname, 'upload')));
app.use('/api/vi',router)
app.listen(process.env.PORT,(req,res)=>{
    console.log(`Port is ${process.env.PORT}`)
})