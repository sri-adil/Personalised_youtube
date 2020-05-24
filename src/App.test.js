import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const res = await fetch("http://localhost:3000/");
  if (res.status >= 400)
  throw new Error("Oops!! Something went wrong") 
});
