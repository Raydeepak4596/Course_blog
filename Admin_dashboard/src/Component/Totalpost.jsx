import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, InputBase, List, ListItem, ListItemButton, ListItemSecondaryAction, ListItemText, Modal, TextField, Typography } from '@mui/material'
import axios from 'axios'
const Totalpost = () => {
  const [data, setdata] = useState('')
  const[mo,setmo]=useState(false)

  const calldata = async () => {
    try {
      const d_find = await axios.get(`http://localhost:4000/api/vi/totalpost`)
      setdata(d_find.data)
    } catch (error) {

    }

  }

  useEffect(() => {
    calldata();
  }, [])

  const deleteitem=async(i)=>{
    
  await  axios.delete(`http://localhost:4000/api/vi/delete/${i}`)
calldata()
    
  }

const openforedit=(uid,index)=>{
  setmo(true)

}
  return (
    
    <Box sx={{ p: 3 }}>
     {mo?(<Box> <Typography variant="h4" component="h1" gutterBottom>
      Update Posts
    </Typography></Box>):(<Box> <Typography variant="h4" component="h1" gutterBottom>
      Total Posts
    </Typography></Box>)}
   
   
    <List>
      {data && data.map((post,i) => (


        <Box key={post._id}>
          {mo?(<Box>
            <form  style={{ width: '100%' }}>
        <InputBase 
          type="file" accept='image/*' 
          sx={{ mb: 2, width: '100%', p: 1, border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <InputBase
          placeholder="Title" name='title' 
          sx={{ mb: 2, width: '100%', p: 1, border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <TextField name='description' 
          placeholder="Description"
          multiline
          rows={10}
          variant="outlined"
          sx={{ mb: 2, width: '100%' }}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Update
        </Button>
      </form>
          </Box>)
          
          :(<Box>
 <ListItem>
            <ListItemText
              primary={post.title}
              secondary={post.description}
            />
            <ListItemSecondaryAction>
              <Button
                variant="contained"
                color="primary"
                sx={{ mr: 1 }}
               onClick={()=>openforedit(post._id,i)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
             onClick={()=>deleteitem(post._id)}
              >
                Delete
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          </Box>)}
          
          
         
        </Box>
      ))}
    </List>
  </Box>

    // ========
  )
}

export default Totalpost