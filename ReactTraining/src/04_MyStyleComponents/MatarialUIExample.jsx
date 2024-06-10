/* eslint-disable no-unused-vars */
import { Delete, Edit } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React from 'react'



export default function MatarialUIExample() {
  return (
    <div>
        <button>Base UI Button</button>
        <Button>Material UI Button</Button>

        <Box sx={{'& button' : {m:1 , p:2}}}>
            <Button variant='text'>Text Button</Button>
            <Button variant='outlined'>outlined Button</Button>
            <Button variant='contained'>contained Button</Button>
        </Box>

        <Box sx={{'& button' : {m:1}}}>
            <Button variant='contained' size='small'>Small Button</Button>
            <Button variant='contained' size='medium'>Medium Button</Button>
            <Button variant='contained' size='large'>Large Button</Button>
        </Box>

        <Box sx={{'& button' : {m:1}}}>
            <Button variant='outlined' size='medium' startIcon={<Edit/>} >Edit Button</Button>
            <Button variant='outlined' size='medium' endIcon={<Delete/>}>Delete Button</Button>
        </Box>

    </div>
  )
}
