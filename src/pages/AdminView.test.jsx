import React from 'react';
import { render, screen } from '@testing-library/react';
import AdminView from './AdminView';
import '@testing-library/jest-dom';

test('There is a button', () => {

    render (<AdminView show={true} />)
    screen.debug()
    const button = screen.getByText(/Femcoders Sevilla/i);
    expect(button).toBeInTheDocument();
  });