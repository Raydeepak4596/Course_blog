// import { Container, Divider, Grid, Toolbar ,Box} from '@mui/material'
// import React from 'react'
// import Cardpage from '../Component/Cardpage'
// import axios from 'axios'
// import { useState } from 'react'
// import { useEffect } from 'react'
// const Home = () => {
//   const [data, setdata] = useState('')
//   const calldatame = async () => {
//     const p = await axios.get(`http://localhost:4000/api/vi/calldata`)
//     console.log(p.data)
//     setdata(p.data)
//   }
//   useEffect(() => {
//     calldatame()
//   }, [])
//   return (
//     <Container >
//       <Toolbar>
//         <Container>
//           <h1>Read Our Latest Blog</h1>
//           <p>
//             "Unlock the full potential of web development with our expert guides, tips, and tutorials, designed to elevate your skills
//             and ensure a successful future in the dynamic digital world."</p>
//           <Divider />
//         </Container>
//       </Toolbar>
//       <Grid container rowSpacing={2} mb={2}>
//         {data && data.map((e) => (
//           <Box>
//             <Grid item xs={12} sm={6}  >
//               <Cardpage d={e}/>
//             </Grid>
//           </Box>
//         ))}



//       </Grid>
//     </Container>
//   )
// }

// export default Home














// ============

import { Container, Divider, Grid, Toolbar, Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Cardpage from '../Component/Cardpage'
import axios from 'axios'

const Home = () => {
  

  const [data, setData] = useState('')

  const calldatame = async () => {
    const p = await axios.get(`http://localhost:4000/api/vi/calldata`)
 setData(p.data)
  }
  useEffect(() => {
    calldatame()
  }, [])

  return (
    <Container>
      <Toolbar>
        <Container>
          <h1>Read Our Latest Blog</h1>
          <p>
            "Unlock the full potential of web development with our expert guides, tips, and tutorials, designed to elevate your skills
            and ensure a successful future in the dynamic digital world."
          </p>
          <Divider />
        </Container>
      </Toolbar>
      <Grid container rowSpacing={2} mb={2}>
        {data && data.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Cardpage d={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Home
