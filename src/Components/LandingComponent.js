import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';


export const LandingComponent =  () => {

    const [users, setUsers]=useState([]);


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


   

    const getUserList=async()=>{
        
        axios.get("http://localhost:8080/getAllUsers").then(response=>{
            setUsers(response.data);
            console.log(response.data);
        })


        

    }

    useEffect(()=>{
      
        getUserList();
       
    },[]);


    



    return (


        <div className="container" style={{ marginTop: '20px' }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                                           

                    
                </Toolbar>
            </AppBar>

            <Box sx={{ flexGrow: 1 }} style={{ marginTop: '10px' }} >
                <Grid container spacing={2}>
                    <Grid xs={4}>
                    <TextField xs={4}   style={{backgroundColor:'white'}} fullWidth color='success' label="Search User..." id="fullWidth" />

                        <ul class="list-group" style={{ marginTop: '10px' }}>

                            {users.map((user)=>(
                                <li class="list-group-item my-2">{user.userName}</li>
                            ))}

                        </ul>
                    </Grid>

                    <Grid xs={8}>
                        <Item>xs-8</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
