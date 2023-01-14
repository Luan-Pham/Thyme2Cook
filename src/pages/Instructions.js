import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

function Instructions() {
  const params = useParams();
  const [instructions, setInstructions] = useState({});

  const getInstructions = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/card?apiKey=${process.env.REACT_APP_SPOON}`
    );
    const instructionData = await data.json();
    setInstructions(instructionData);
    console.log(instructionData);
  };

  useEffect(() => {
    getInstructions();
  }, [params.name]);

  return (
    <Container>
      <img src={instructions.url} alt="recipe card" />
    </Container>
  );
}

export default Instructions;
