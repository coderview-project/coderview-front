import React from 'react';
import { render, screen } from '@testing-library/react';
import AdminBootcampView from './AdminBootcampView';
import '@testing-library/jest-dom';

test('There is a button', () => {

    render (<AdminBootcampView show={true} />)
    screen.debug()
    const button = screen.getByText(/GESTIONAR COMPETENCIAS/i);
    expect(button).toBeInTheDocument();
  });