import Express from 'express'
const router = Express.Router()
import model from '../Model/model.js'
import bcrypt from 'bcrypt'
import { post_add } from '../Model/model.js'
import multer from 'multer'
import mongoose from 'mongoose'


router.post('/register', async (req, res) => {
    const salt = 10
    try {
        const { name, email, password } = req.body
        bcrypt.hash(password, salt, async (err, hash) => {
            if (hash) {
                const admin_data = new model({ name: name, email: email, password: hash })
                await admin_data.save().then(() => {
                    console.log('data is inserted')
                }).catch(
                    console.log('data is not inserted')
                )
            }
            else {
                console.log('no inserted')

            }

        })

    } catch (error) {
        console.log(error)
    }
})


router.post('/login', async (req, res) => {
   
    try {
        const { email, password } = req.body
        const mode = await model.findOne({ email })
       if(!mode){
        console.log('user not registered')
       }
       else{
        const ismatch=bcrypt.compare(password,mode.password)
        if(!ismatch){
            console.log('not scuccess login')
        }
        else{
            console.log('password  match')
        }

       }

    } catch (error) {
        console.log(error)
    }
})


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
});
const upload = multer({storage: storage })
router.post('/addpost',upload.single('image'), async (req, res) => {
   
    try {
        const { title, description } = req.body
        
      const im=req.file.filename
      const d=new post_add({title:title,description:description,image:im})
       await d.save().then(()=>{
        console.log('inserted admin data')
       })

    } catch (error) {
        console.log(error)
    }
})


router.get('/totalpost', async (req, res) => {
   
    try {
        const d_post=await post_add.find()
        res.json(d_post)
    } catch (error) {
        
    }
})


router.delete('/delete/:id', async (req, res) => {
   
    try {
        const i=req.params.id
      
        const d_post=await post_add.findByIdAndDelete(i)
        res.json(d_post)
    } catch (error) {
        
    }
})

// router.put('/updatedata/:uuid', async (req, res) => {
   
//     try {
//         const i=req.params.uuid
//         const {title1,description1}=req.body
//         const ii=req.file.filename
      
      
//         const d_post=await post_add.findByIdAndUpdate(i,{title:title1,description:description1,image:ii})
//         res.json(d_post)
//     } catch (error) {
        
//     }
// })


router.put('/updatedata/:uuid', upload.single('image'), async (req, res) => {
    try {
        const id = req.params.uuid
        const { title1, description1 } = req.body
        const updateData = { title: title1, description: description1 }
        if (req.file) {
            updateData.image = req.file.filename
        }
        const updatedPost = await post_add.findByIdAndUpdate(id, updateData, { new: true })
        res.json(updatedPost)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})



router.get('/calldata', async (req, res) => {
   
    try {
        const d_post=await post_add.find()
        res.json(d_post)
    } catch (error) {
        
    }
})





export default router


