import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Recipe from './Recipe';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:recipe" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
