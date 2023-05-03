import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeView from './HomeView';
import '@testing-library/jest-dom';

test('should contain a image element', () => { 
    render(<HomeView />); 
    screen.debug()
    const ImageElement = screen.getByAltText(/background-home/i); 
    expect(ImageElement).toBeInTheDocument(); 
  });