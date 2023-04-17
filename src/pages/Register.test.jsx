import React from 'react';
import { render, screen } from '@testing-library/react';
import Register from '../pages/Register';
import '@testing-library/jest-dom';


test('should contain a image element', () => { 
  render(<Register />); 
  screen.debug()
  const ImageElement = screen.getByAltText(/header/i); 
  expect(ImageElement).toBeInTheDocument(); 
});