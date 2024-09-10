import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header component', () => {
  it('should render header component', () => {
    render(<Header>Hello World</Header>);
    const title = screen.getByText(/hello world/i);

    expect(title).toBeInTheDocument();
  });
});

