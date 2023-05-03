import React from 'react';
import { render } from '@testing-library/react';
import Contact from './Contact';

describe('Contact component', () => {
  test('renders font-poppins class', () => {
    const { getByText } = render(<Contact />);
    const fontPoppins = getByText('Contacta con el equipo de CodeRview');
    expect(fontPoppins).toBeDefined();
  });
});
