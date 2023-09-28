import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/newBooking.css";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { useRef } from 'react';

export const  Mybookings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [number, setNumber] = useState("");


  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior : 'smooth'});
  };

  return (
    <>
    <div className="container">
      <div className="navbar">
        <Navbar/>
      </div>

      <div className="bookPage">
        <h1 className="title">Book a Table</h1>
        <h1 className="caption">Make a reservation at your favourite Restaurant</h1>

        <div className="bookButton" onClick={handleClick}>
          <h6 className="book">Book</h6>
        </div>

      </div>


      <div ref={ref} className="main-content">
        <div className="booking-form">
          
          <div className="form-row">
            <input
              type="text"
              placeholder="Enter Name"
              maxLength={140}
              className="input-field"
              onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div className="form-row">
            <input
              type="text"
              placeholder="Email"
              maxLength={140}
              className="input-field"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              placeholder="Contact Number"
              maxLength={140}
              className="input-field"
              onChange={(e) => setNumber(e.target.value)}
            />
            </div>
            <div className="form-row">
            <input
              type="text"
              placeholder="Number of Guests"
              maxLength={140}
              className="input-field"
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <div className="form-row">
  <select id="time" class="input-field" required>
    <option value="" style={{color:"black"}}>Select a time</option>
    <option value="11:00 AM" style={{color:"black"}}>11:00 AM</option>
    <option value="12:00 PM" style={{color:"black"}}>12:00 PM</option>
    <option value="1:00 PM" style={{color:"black"}}>1:00 PM</option>
    <option value="2:00 PM" style={{color:"black"}}>2:00 PM</option>
    <option value="3:00 PM" style={{color:"black"}}>3:00 PM</option>
    <option value="4:00 PM" style={{color:"black"}}>4:00 PM</option>
    <option value="5:00 PM" style={{color:"black"}}>5:00 PM</option>
    <option value="6:00 PM" style={{color:"black"}}>6:00 PM</option>
    <option value="7:00 PM" style={{color:"black"}}>7:00 PM</option>
    <option value="8:00 PM" style={{color:"black"}}>8:00 PM</option>
    <option value="9:00 PM" style={{color:"black"}}>9:00 PM</option>
  </select>
  </div>
  <div className="form-row">
  
  <input type="date" id="date" class="input-field" required></input>
          </div>
          <Link to="/">
            <button className="submit-button">Book</button>
          </Link>
        </div>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
    </>
  );
};