import React, { useState, useEffect } from 'react';

function Random() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  const limit = 10;
  const key = 'd5d1d457c1004156ac6fb0b793d29cc9';
  const getRandom = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=${limit}`
    );
    const data = await api.json();
    console.log(data);
    setRandom(data.recipes);
  };
  return <div>Random</div>;
}

export default Random;
