import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Instructions from './Instructions';
import Recipe from './Recipe';

function Pages() {
  return (
    <Routes>
      <Route path="/Thyme2Cook" element={<Home />} />
      <Route path="/recipe/:search" element={<Recipe />} />
      <Route path="/instructions/:name" element={<Instructions />} />
    </Routes>
  );
}

export default Pages;
