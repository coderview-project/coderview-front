import React from 'react';
import { render, screen } from '@testing-library/react';
import RegisterForm from './RegisterForm';
import '@testing-library/jest-dom';

test('There is a button', () => {

    render (<RegisterForm show={true} />)
    const button = screen.getByText(/Enviar/i);
    expect(button).toBeInTheDocument();
  });