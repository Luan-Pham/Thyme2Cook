import { InputLabel, FilledInput, FormControl } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Searchbar() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/recipe/' + input);
  };

  return (
    <Form onSubmit={submitHandler}>
      <div>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel>
            Search for a recipe by ingredient, cuisine, diet, equipment, etc.
          </InputLabel>
          <FilledInput
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
          />
        </FormControl>
      </div>
    </Form>
  );
}

export default Searchbar;

const Form = styled.form`
  margin: 0rem 20rem;

  div {
    margin: 1rem 0 1rem;
    width: 100%;
    position: relative;
  }
`;

// https://api.spoonacular.com/recipes/complexSearch
