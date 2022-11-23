//I imported all the routes here

import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import BookingPage from "./BookingPage";
import ContactUs from "./ContactUs";
import Feedback from "./Feedback";
import Home from "./Home";
import MyVehicle from "./MyVehicle";
import NavBar from "./NavBar";
import Services from "./Services";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SparesAccessories from "./SparesAccessories";
import Tnc from "./Tnc";

const AllRoutes = () => {
  return (
    <div>
      {/* Here I am showing navbar as default */}
      <NavBar />

      {/* Below I declared all routes and given routes for each component */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route
          path="/spares-accessories"
          element={<SparesAccessories />}
        ></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/myvehicle" element={<MyVehicle />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/termsofservice" element={<Tnc />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
