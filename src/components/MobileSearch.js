import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  InputLabel,
  FilledInput,
  FormControl,
  Container,
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

  return;
}

export default MobileSearch;
