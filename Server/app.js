import Express from 'express'
const PORT=4000

const app=Express()

app.listen(PORT,(req,res)=>{
    console.log(`Port is ${PORT}`)
})