import { Box, Button, InputBase, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Addpost = () => {
  const [data, setdata] = useState({
    title: '',
    description: '',
    image: ''
  })
  const handledata = (e) => {
    const { name, value } = e.target
    setdata({ ...data, [name]: value })
  }
  const imghandle = (e) => {
    console.log(e.target.files[0])
    setdata({ ...data, image: e.target.files[0] })

  }

  const btnadd = (e) => {
    e.preventDefault()
    try {
      const formdata = new FormData()
      formdata.append('title', data.title)
      formdata.append('description', data.description)
      formdata.append('image', data.image)

      axios.post(`http://localhost:4000/api/vi/addpost`, formdata)
      setdata({ title: '', description: '', image: '' })
      e.target.reset()

    } catch (error) {

    }
  }

  const handledatadescription = (e) => {
    setdata({ ...data, description: e });
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
        p: 2,
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: 3,
        width: '100%',
        maxWidth: '600px',
        mx: 'auto'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Add New Post
      </Typography>
      <form onSubmit={btnadd} style={{ width: '100%' }}>
        <InputBase onChange={imghandle}
          type="file" accept='image/*'
          sx={{ mb: 2, width: '100%', p: 1, border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <InputBase
          placeholder="Title" name='title' value={data.title} onChange={handledata}
          sx={{ mb: 2, width: '100%', p: 1, border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <ReactQuill value={data.description} onChange={handledatadescription}
          placeholder="Description"


          sx={{ mb: 2, width: '100%' }}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Add
        </Button>
      </form>

    </Box>
  );
};

export default Addpost;
