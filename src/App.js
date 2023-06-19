import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieSearch from "./MovieSearch";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieSearch />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );

}

export default App;
