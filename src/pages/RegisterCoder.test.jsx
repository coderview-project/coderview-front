import React from 'react';
import { render, screen } from '@testing-library/react';
import RegisterCoder from './RegisterCoder';
import '@testing-library/jest-dom';


test('should contain a image element', () => { 
  render(<RegisterCoder />); 
  screen.debug()
  const ImageElement = screen.getByAltText(/header/i); 
  expect(ImageElement).toBeInTheDocument(); 
});