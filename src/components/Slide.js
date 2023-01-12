import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Slide() {
  const [slide, setSlide] = useState([]);

  useEffect(() => {
    getSlide();
  }, []);

  const limit = 10;
  const key = process.env.REACT_APP_SPOON;

  const getSlide = async () => {
    const check = localStorage.getItem('slide');
    if (check) {
      setSlide(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=${limit}`
      );
      const data = await api.json();
      localStorage.setItem('slide', JSON.stringify(data.recipes));
      console.log(data);
      setSlide(data.recipes);
    }
  };
  return (
    <Splide
      options={{
        rewind: true,
        gap: '3rem',
        perPage: 4,
        pagination: false,
        drag: 'free',
        breakpoints: {
          640: {
            perPage: 1,
          },
        },
      }}
      aria-label="My Favorite Images"
    >
      {slide.map((recipe) => {
        return (
          <SplideSlide>
            <p> {recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
          </SplideSlide>
        );
      })}
    </Splide>
  );
}

export default Slide;
