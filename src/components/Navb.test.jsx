import React from 'react';
import { render, screen } from '@testing-library/react';
import Navb from './Navb';
import '@testing-library/jest-dom';

test('should contain a image element', () => { 
    render(<Navb />); 
    screen.debug()
    const ImageElement = screen.getByAltText(/logo CodeRview/i); 
    expect(ImageElement).toBeInTheDocument(); 
  });