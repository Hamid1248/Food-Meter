import React from 'react'
import SideBar from '../Components/sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import TopAppBar from '../Components/appBar';

export const UsersDashboard=()=> {
  return (
    <>
    <TopAppBar/>
      <Box sx={{ display :"flex"}}>

      <SideBar/>
      <h1> User Dashboard</h1>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      </Box>
      </Box>
      
    </>
  )
};
