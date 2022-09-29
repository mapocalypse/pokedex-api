import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders header', () => {
  render(<App />);
  const header = screen.getByText(/pokemons/i);
  expect(header).toBeInTheDocument();
});

test('renders Loading Pokémons...', () => {
    render(<App />);
    const loadingText = screen.getByText(/Loading Pokémons.../i);
    expect(loadingText).toBeInTheDocument();
  });