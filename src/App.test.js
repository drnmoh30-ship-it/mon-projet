import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Centre de Formation header', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', { level: 1, name: /Centre de Formation/i });
  expect(titleElement).toBeInTheDocument();
});
