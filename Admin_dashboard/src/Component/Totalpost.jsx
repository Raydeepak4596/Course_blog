import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material'
import axios from 'axios'
const Totalpost = () => {
  const [data, setdata] = useState('')
  const[id,setid]=useState('')
  const calldata = async () => {
    try {
      const d_find = await axios.get(`http://localhost:4000/api/vi/totalpost`)
      setdata(d_find.data)
    } catch (error) {

    }

  }

  useEffect(() => {
    calldata();
  }, [id])

  const deleteitem=async(i)=>{
    setid(i)
  await  axios.delete(`http://localhost:4000/api/vi/delete/${i}`)

    
  }

  return (
    
    <Box sx={{ p: 3 }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Total Posts
    </Typography>
    
    <List>
      {data && data.map((post) => (
        <Box key={post._id}>
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
        </Box>
      ))}
    </List>
  </Box>

    // ========
  )
}

export default Totalpost