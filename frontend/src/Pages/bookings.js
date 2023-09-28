import React, { useState, useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import "../CSS/bookings.css";

export const Booking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings data from the backend API
    fetchBookings()
      .then((data) => setBookings(data))
      .catch((error) => console.log(error));
  }, []);

  const fetchBookings = async () => {
    try {
      // Fetch bookings data from the backend API endpoint
      const response = await fetch("api/bookings");
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch bookings");
    }
  };

  // Dummy data for bookings
  const dummyBookings = [
    {
      id: 1,
      restaurant: "Restaurant A",
      date: "2023-06-01",
      time: "19:00",
      guests: 2,
      contactNumber: "123-456-7890",
    },
    {
      id: 2,
      restaurant: "Restaurant B",
      date: "2023-06-02",
      time: "18:30",
      guests: 4,
      contactNumber: "987-654-3210",
    },
    // Add more dummy bookings here if needed
  ];

  // Use dummy bookings if actual bookings are empty
  const bookingsToRender = bookings.length > 0 ? bookings : dummyBookings;

  return (
    <div className="container" style={{ background: "linear-gradient(to bottom, #4269E2, #25272B)" }}>
      <Navbar />
      <div className="content">
        <h2 className="heading">My Bookings</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Restaurant</th>
                <th>Date</th>
                <th>Time</th>
                <th>No. of Guests</th>
                <th>Contact Number</th>
              </tr>
            </thead>
            <tbody>
              {bookingsToRender.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.restaurant}</td>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>
                  <td>{booking.guests}</td>
                  <td>{booking.contactNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};