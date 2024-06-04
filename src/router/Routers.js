import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Bookings from "../pages/Bookings";
import SearchResultList from "../pages/SearchResultList";
import TourDetails from "../pages/TourDetails";
import Tours from "../pages/Tours";
import BookingList from "../pages/BookingList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/bookingList" element={<BookingList />} />
      <Route path="/tour/search" element={<SearchResultList />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tour/:id" element={<TourDetails />} />
    </Routes>
  );
};

export default AppRoutes;
