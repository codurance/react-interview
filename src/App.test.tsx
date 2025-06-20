import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /hello world/i });
  expect(heading).toBeInTheDocument();
});
