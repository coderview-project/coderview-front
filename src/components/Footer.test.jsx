import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';


test('Text in the Footer', () => {
    const { getByText } = render(<Footer />);
    const linkElement = getByText(/Derechos reservados/i);
    expect(linkElement).toBeInTheDocument();
});
