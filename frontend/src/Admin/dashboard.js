import React from 'react'
import SideBar from '../Components/sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import TopAppBar from '../Components/appBar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { colors, useColorScheme } from '@mui/material';
import Stack from '@mui/material/Stack';

export const Dashboard=()=> {
  return (
    <>
    <TopAppBar/>
    <Box height={70}/>
      <Box sx={{ display :"flex"}}>

      <SideBar/>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack spacing={2}>
        <Card sx={{maxWidth: 50 +"%"  ,height: 30 + "vh" }} className="gradient">
      
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Overview
          </Typography>
        </CardContent>
    </Card>
          
        <Card sx={{ maxWidth: 80 + "%",height: 50 + "vh", marginLeft: 20 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Registered Restaurants
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
  </Card>
  </Stack>
        
      </Grid>
      <Grid item xs={4}>
      <Card sx={{minWidth: 30 +"%"  ,height: 82 + "vh", marginLeft: 2 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Profile
        </Typography>
      </CardContent>
  </Card>
      </Grid>
      </Grid>
      </Box>
      </Box>
    
    </>
  )
};

