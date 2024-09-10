import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button component', () => {
  it('should render button component', () => {
    render(<Button>Click me!</Button>);
    
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should execute function when clicked', async () => {
    const user = userEvent.setup();

    const onClick = jest.fn();

    render(
      <Button
        onClick={onClick}
      >
        Click me!
      </Button>
    );
    
    const button = screen.getByRole('button');

    await user.click(button);

    expect(button).toBeInTheDocument();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not be clicked when disabled', async () => {
    const user = userEvent.setup();

    const onClick = jest.fn();

    render(
      <Button
        onClick={onClick}
        disabled
      >
        Click me!
      </Button>
    );

    const button = screen.getByRole('button');

    await user.click(button);

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(onClick).not.toHaveBeenCalled();
  });
});

