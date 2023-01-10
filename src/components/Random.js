import React, { useState, useEffect } from 'react';
require('dotenv').config();
function Random() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  const limit = 10;

  const getRandom = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${limit}`
    );
    const data = await api.json();
    setRandom(data.recipes);
  };
  return <div>Random</div>;
}

export default Random;
