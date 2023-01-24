import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  InputLabel,
  FilledInput,
  FormControl,
  Container,
  Form,
  AppBar,
} from '@mui/material';
import styled from 'styled-components';

function MobileSearch() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/recipe/' + input);
  };

  return (
    <AppBar position="static">
      <Form onSubmit={submitHandler}>
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
      </Form>
    </AppBar>
  );
}

export default MobileSearch;
