import mongoose, { model } from "mongoose";

const schema=mongoose.Schema;
const newschema=new schema({
    name:String,
    email:String,
    password:String,
})

const post=new schema({
    title:String,
    description:String,
    image:String,
})


const admin_user=mongoose.model('Admin_user',newschema)
const post_add=mongoose.model('Add_post',post)
export default admin_user
export {post_add}