import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp } from "./Pages/signup";
import { Login } from "./Pages/Login";
import { Favorites } from "./Pages/favorites";
import { Profile } from "./Pages/profile";
import { HomePage } from "./Pages/HomePage";
import { Booking } from "./Pages/bookings";
import { Mybookings } from "./Pages/myBookings";
import {Protected} from "./Components/Protected/Protected";
import { Error } from "./Pages/Error/Error";
import { ReviewPortal } from "./Pages/reviewPortal";



function App() {
const isAuth=true;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Protected isAuth={isAuth}><HomePage/></Protected>}  />

          <Route path="/register" exact element={< SignUp/>}/>
          <Route path="/login" exact element={< Login/>}/>

          <Route path="/profile" exact element={<Protected isAuth={isAuth}><Profile /></Protected>} />

       <Route path="/favorites" exact element={<Protected isAuth={isAuth}><Favorites /></Protected>} />

        <Route path="/booking" exact element={<Protected isAuth={isAuth}><Mybookings/></Protected> }/>
          <Route path="/NewBooking" exact element={<Protected isAuth={isAuth}><Booking/> </Protected>}/>
          <Route path="/ReviewPortal" exact element={<Protected isAuth={isAuth}><ReviewPortal/></Protected>}/>
          <Route path="*" element={<Error/>}/>
      </Routes>
        
    </Router>

    </div>
  );
}

export default App;
