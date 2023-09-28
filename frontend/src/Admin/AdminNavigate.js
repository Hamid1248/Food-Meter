import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./dashboard";
import {UsersDashboard} from "./usersDashboard";
import {RestaurantDashboard} from "./restaurantDashboard";

export const AdminNavigate = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            {" "}
          </Route>
          <Route path="/users" element={<usersDashboard />}>
            {" "}
          </Route>
          <Route path="/restaurants" element={<restaurantDashboard />}>
            {" "}
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
