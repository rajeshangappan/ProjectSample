import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OKR_Diagram from './OKR_Diagram';

describe('<OKR_Diagram />', () => {
  test('it should mount', () => {
    render(<OKR_Diagram />);
    
    const okrDiagram = screen.getByTestId('OKR_Diagram');

    expect(okrDiagram).toBeInTheDocument();
  });
});