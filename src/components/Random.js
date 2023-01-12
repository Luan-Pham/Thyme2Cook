import React, { useState, useEffect } from 'react';
import { Card, CardHeader, styled, CardMedia } from '@mui/material';
import IconButton from '@mui/material/IconButton';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Random() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  const limit = 5;
  const key = process.env.REACT_APP_SPOON;
  const getRandom = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=${limit}`
    );
    const data = await api.json();
    console.log(data);
    setRandom(data.recipes);
  };
  return (
    <div>
      {random.map((recipe) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={recipe.id}>
            <CardHeader title={recipe.title} />
            <CardMedia
              component="img"
              height="194"
              image={recipe.image}
              alt={recipe.title}
            />
          </Card>
        );
      })}
    </div>
  );
}

export default Random;
