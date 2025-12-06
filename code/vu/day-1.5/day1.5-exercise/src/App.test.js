import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Counter with useState Hook', () => {
  render(<App />);
  const counterHeading = screen.getByText(/Counter with useState Hook/i);
  expect(counterHeading).toBeInTheDocument();
});

test('renders User Profile Form', () => {
  render(<App />);
  const userProfileHeading = screen.getByText(/User Profile Form/i);
  expect(userProfileHeading).toBeInTheDocument();
});