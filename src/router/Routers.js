import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SearchResultList from "../pages/SearchResultList";
import TourDetails from "../pages/TourDetails";
import Tours from "../pages/Tours";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tour/search" element={<SearchResultList />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tour/:id" element={<TourDetails />} />
    </Routes>
  );
};

export default AppRoutes;
