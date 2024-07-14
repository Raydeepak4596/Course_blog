import mongoose from "mongoose"
const db=async()=>{
try {
    
await mongoose.connect(process.env.URL).then(()=>{
    console.log('db is connected')
})

} catch ({error}) {
    
}
}
export default db