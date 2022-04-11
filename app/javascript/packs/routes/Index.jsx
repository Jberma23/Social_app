import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "../components/Home";
import Navbar from 'react-bootstrap/Navbar'
import NavigationBar from "../components/navigation_bar";





export default (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={Home} />
      </Routes>
  </Router> 
 
);