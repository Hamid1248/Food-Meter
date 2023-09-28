import React from 'react'
import SideBar from '../Components/sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import TopAppBar from '../Components/appBar';

export const RestaurantDashboard=()=> {
  return (
    <>
    <TopAppBar/>
      <Box sx={{ display :"flex"}}>

      <SideBar/>
      <h1> Restaurant Dashboard</h1>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      </Box>
      </Box>
      
    </>
  )
};
