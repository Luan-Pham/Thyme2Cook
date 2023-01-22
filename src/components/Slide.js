import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Slide() {
  const [slide, setSlide] = useState([]);

  useEffect(() => {
    getSlide();
  }, []);

  const limit = 10;
  const key = process.env.REACT_APP_SPOON;

  const getSlide = async () => {
    const check = localStorage.getItem("slide");
    if (check) {
      setSlide(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=${limit}`
      );
      const data = await api.json();
      localStorage.setItem("slide", JSON.stringify(data.recipes));
      console.log(data);
      setSlide(data.recipes);
    }
  };
  return (
    <Container>
      <h3> Try these recipes!</h3>
      <Splide
        options={{
          rewind: true,
          gap: "2rem",
          perPage: 4,
          pagination: false,
          drag: "free",
          breakpoints: {
            2050: { perPage: 3 },
            1500: { perPage: 2 },
            640: {
              perPage: 1,
            },
          },
        }}
        aria-label="My Favorite Images"
      >
        {slide.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={"/instructions/" + recipe.id}>
                  <p> {recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Container>
  );
}

const Container = styled.div`
  margin: 4 rem 0 rem;
`;

const Card = styled.div`
  min-heightl: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 30px;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 2rem;
    height: 50%;
    display: flex;
    justify-content: center;
  }
`;

export default Slide;
