import React from 'react';
import { render } from '@testing-library/react';
import RegisterInstructor from './RegisterInstructor';
import '@testing-library/jest-dom';


test('Text in the RegisterInstructor ', () => {
    const { getByText } = render(<RegisterInstructor />);
    const linkElement = getByText(/Registro de formadores/i);
    expect(linkElement).toBeInTheDocument();
});
