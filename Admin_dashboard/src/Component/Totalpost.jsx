// import React, { useEffect, useState } from 'react'
// import { Box, Button, Divider, InputBase, List, ListItem, ListItemButton, ListItemSecondaryAction, ListItemText, Modal, TextField, Typography } from '@mui/material'
// import axios from 'axios'
// const Totalpost = () => {
//   const [data, setdata] = useState([])
//   const [mo, setmo] = useState(false)
//   const [id, setid] = useState(null)
//   const [mid, setmid] = useState(null)
//   const [ftdata, setftdata] = useState({
//     title1: '',
//     description1: '',
//     image:''

//   })

//   const calldata = async () => {
//     try {
//       const d_find = await axios.get(`http://localhost:4000/api/vi/totalpost`)
//       setdata(d_find.data)
//     } catch (error) {

//     }

//   }

//   useEffect(() => {
//     calldata();
//   }, [])

//   const deleteitem = async (i) => {

//     await axios.delete(`http://localhost:4000/api/vi/delete/${i}`)
//     calldata()

//   }

//   const openforedit = (uid, index) => {
//     setmo(true)
//     setid(index)
//     setmid(uid)
//     setftdata({
//       title1: data[index].title,
//       description1: data[index].description,

//     })

//   }

//   const handlechange = (e) => {
//     const { name, value } = e.target
//     setftdata({ ...ftdata, [name]: value })

//   }

//   const ftimagedata = (e) => {
//     setftdata({ ...ftdata, image: e.target.files[0] })
//   }

//   const formsubmitupdate = async (e) => {
//     e.preventDefault()
//     const formdataupdata = new FormData();
//     formdataupdata.append('title1', ftdata.title1)
//     formdataupdata.append('description1', ftdata.description1)
//     // formdataupdata.append('image',ftdata.image)

//     try {

//       await axios.put(`http://localhost:4000/api/vi/updatedata/${data[id]._id}`, formdataupdata)
//       setftdata({ title: '', description: '' })
//       setmo(false)

//       setmid(null)
//     } catch (error) {

//     }

//   }

//   return (

//     <Box sx={{ p: 3 }}>

//       {mo ? (<Box> <Typography variant="h4" component="h1" gutterBottom>
//         Update Posts
//       </Typography></Box>) : (<Box> <Typography variant="h4" component="h1" gutterBottom>
//         Total Posts
//       </Typography></Box>)}


//       <List>
//         {data && data.map((post, i) => (


//           <Box key={post._id}>
//             {id === i ? (<Box>
//               <form onSubmit={formsubmitupdate} style={{ width: '100%' }}>
//                 <InputBase
//                   type="file" accept='image/*' onChange={ftimagedata}
//                   sx={{ mb: 2, width: '100%', p: 1, border: '1px solid #ccc', borderRadius: '4px' }}
//                 />
//                 <InputBase
//                   placeholder="Title" name='title1' value={ftdata.title1}
//                   sx={{ mb: 2, width: '100%', p: 1, border: '1px solid #ccc', borderRadius: '4px' }} onChange={handlechange}
//                 />
//                 <TextField name='description1' onChange={handlechange}
//                   placeholder="Description"
//                   multiline
//                   rows={10}
//                   variant="outlined" value={ftdata.description1}
//                   sx={{ mb: 2, width: '100%' }}
//                 />
//                 <Button variant="contained" color="primary" type="submit" fullWidth>
//                   Update
//                 </Button>
//               </form>
//             </Box>)

//               : (<Box>
//                 <ListItem>
//                   <ListItemText
//                     primary={post.title}
//                     secondary={post.description}
//                   />
//                   <ListItemSecondaryAction>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       sx={{ mr: 1 }}
//                       onClick={() => openforedit(post._id, i)}
//                     >
//                       Edit
//                     </Button>
//                     <Button
//                       variant="contained"
//                       color="secondary"
//                       onClick={() => deleteitem(post._id)}
//                     >
//                       Delete
//                     </Button>
//                   </ListItemSecondaryAction>
//                 </ListItem>
//                 <Divider />
//               </Box>)}



//           </Box>
//         ))}
//       </List>


//     </Box>

//     // ========
//   )
// }

// export default Totalpost















// ===========================


import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, InputBase, List, ListItem, ListItemButton, ListItemSecondaryAction, ListItemText, Modal, TextField, Typography } from '@mui/material'
import axios from 'axios'

const Totalpost = () => {
  const [data, setdata] = useState([])
  const [mo, setmo] = useState(false)
  const [id, setid] = useState(null)
  const [mid, setmid] = useState(null)
  const [ftdata, setftdata] = useState({
    title1: '',
    description1: '',
    image: ''
  })

  const calldata = async () => {
    try {
      const d_find = await axios.get(`http://localhost:4000/api/vi/totalpost`)
      setdata(d_find.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    calldata();
  }, [])

  const deleteitem = async (i) => {
    await axios.delete(`http://localhost:4000/api/vi/delete/${i}`)
    calldata()
  }

  const openforedit = (uid, index) => {
    setmo(true)
    setid(index)
    setmid(uid)
    setftdata({
      title1: data[index].title,
      description1: data[index].description,
      image: '' // reset image
    })
  }

  const handlechange = (e) => {
    const { name, value } = e.target
    setftdata({ ...ftdata, [name]: value })
  }

  const ftimagedata = (e) => {
    setftdata({ ...ftdata, image: e.target.files[0] })
  }

  const formsubmitupdate = async (e) => {
    e.preventDefault()
    const formdataupdata = new FormData();
    formdataupdata.append('title1', ftdata.title1)
    formdataupdata.append('description1', ftdata.description1)
    if (ftdata.image) {
      formdataupdata.append('image', ftdata.image)
    }

    try {
      await axios.put(`http://localhost:4000/api/vi/updatedata/${data[id]._id}`, formdataupdata)
      setftdata({ title1: '', description1: '', image: '' })
      setmo(false)
      setmid(null)
      calldata() // refresh data after update
      e.target.reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box sx={{ p: 3 }}>
      {mo ? (
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Update Posts
          </Typography>
        </Box>
      ) : (
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Total Posts
          </Typography>
        </Box>
      )}
      <List>
        {data && data.map((post, i) => (
          <Box key={post._id}>
            {id === i ? (
              <Box>
                <form onSubmit={formsubmitupdate} style={{ width: '100%' }}>
                  <InputBase
                    type="file"
                    accept='image/*'
                    onChange={ftimagedata}
                    sx={{ mb: 2, width: '100%', p: 1, border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                  <InputBase
                    placeholder="Title"
                    name='title1'
                    value={ftdata.title1}
                    sx={{ mb: 2, width: '100%', p: 1, border: '1px solid #ccc', borderRadius: '4px' }}
                    onChange={handlechange}
                  />
                  <TextField
                    name='description1'
                    onChange={handlechange}
                    placeholder="Description"
                    multiline
                    rows={10}
                    variant="outlined"
                    value={ftdata.description1}
                    sx={{ mb: 2, width: '100%' }}
                  />
                  <Button variant="contained" color="primary" type="submit" fullWidth>
                    Update
                  </Button>
                </form>
              </Box>
            ) : (
              <Box>
                <ListItem>
                  <ListItemText
                    primary={post.title.slice(0,30)}
                    secondary={post.description.slice(0,50)+"..."}
                  />
                  <ListItemSecondaryAction>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mr: 1 }}
                      onClick={() => openforedit(post._id, i)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => deleteitem(post._id)}
                    >
                      Delete
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </Box>
            )}
          </Box>
        ))}
      </List>
    </Box>
  )
}

export default Totalpost




// =====================
























// // ====================



//  import React, { useEffect, useState } from 'react';
// import { Box, Button, Divider, InputBase, List, ListItem, ListItemSecondaryAction, ListItemText, TextField, Typography } from '@mui/material';
// import axios from 'axios';

//  const Totalpost = () => {
//     const [data, setData] = useState([]);
//     const [editIndex, setEditIndex] = useState(null);
//     const [formData, setFormData] = useState({
//         title1: '',
//         description1: '',
        
//     });

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:4000/api/vi/totalpost');
//             setData(response.data);
//         } catch (error) {
//             console.error('Error fetching posts', error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const deleteItem = async (id) => {
//         try {
//             await axios.delete(`http://localhost:4000/api/vi/delete/${id}`);
//             fetchData();
//         } catch (error) {
//             console.error('Error deleting post', error);
//         }
//     };

//     const openForEdit = (id, index) => {
//         setEditIndex(index);
//         setFormData({
//             title1: data[index].title,
//             description1: data[index].description
//         });
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmitUpdate = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.put(`http://localhost:4000/api/vi/updatedata/${data[editIndex]._id}`, formData);
//             setFormData({ title1: '', description1: '' });
//             setEditIndex(null);
//             fetchData();
//         } catch (error) {
//             console.error('Error updating post', error);
//         }
//     };

//     return (
//         <Box sx={{ p: 3 }}>
//             <Typography variant="h4" component="h1" gutterBottom>
//                 Total Posts
//             </Typography>

//             <List>
//                 {data && data.map((post, i) => (
//                     <Box key={post._id}>
//                         {editIndex === i ? (
//                             <Box>
//                                 <form onSubmit={handleSubmitUpdate} style={{ width: '100%' }}>
//                                     <InputBase
//                                         placeholder=" Title"
//                                         name="title1"
//                                         value={formData.title1}
//                                         sx={{ mb: 2, width: '100%', p: 1, border: '1px solid #ccc', borderRadius: '4px' }}
//                                         onChange={handleChange}
//                                     />
//                                     <TextField
//                                         name="description1"
//                                         onChange={handleChange}
//                                         placeholder="Description"
//                                         multiline
//                                         rows={10}
//                                         variant="outlined"
//                                         value={formData.description1}
//                                         sx={{ mb: 2, width: '100%' }}
//                                     />
//                                     <Button variant="contained" color="primary" type="submit" fullWidth>
//                                         Update
//                                     </Button>
//                                 </form>
//                             </Box>
//                         ) : (
//                             <Box>
//                                 <ListItem>
//                                     <ListItemText primary={post.title} secondary={post.description} />
//                                     <ListItemSecondaryAction>
//                                         <Button
//                                             variant="contained"
//                                             color="primary"
//                                             sx={{ mr: 1 }}
//                                             onClick={() => openForEdit(post._id, i)}
//                                         >
//                                             Edit
//                                         </Button>
//                                         <Button
//                                             variant="contained"
//                                             color="secondary"
//                                             onClick={() => deleteItem(post._id)}
//                                         >
//                                             Delete
//                                         </Button>
//                                     </ListItemSecondaryAction>
//                                 </ListItem>
//                                 <Divider />
//                             </Box>
//                         )}
//                     </Box>
//                 ))}
//             </List>
//         </Box>
//     );
//  };

//  export default Totalpost;
