import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {getCompanyData} from "./api/companyData";
import {getUserData} from "./api/userData";

test('renders hello world', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /hello world/i });
  expect(heading).toBeInTheDocument();
});

test('', () => {
  getUserData().then(console.log);
})