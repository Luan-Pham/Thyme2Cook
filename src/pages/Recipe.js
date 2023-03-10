import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {
  const [displayRecipes, setDisplayRecipes] = useState([]);
  let params = useParams();

  const getRecipes = async (name) => {
    const limit = 9;
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON}&query=${name}&number=${limit}`
    );
    const recipes = await data.json();
    setDisplayRecipes(recipes.results);
  };

  useEffect(() => {
    getRecipes(params.search);
  }, [params.search]);

  return (
    <Grid>
      {displayRecipes.map((recipe) => {
        return (
          <Card key={recipe.id}>
            <Link to={'/instructions/' + recipe.id}>
              <p> {recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  p {
    text-align: center;
    padding: 1rem;
    display: flex;
    justify-content: center;
    position: relative;
    justify-content: center;
    bottom: 0%;
  }
`;

export default Recipe;
