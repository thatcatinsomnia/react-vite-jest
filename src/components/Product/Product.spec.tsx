import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';
import { CartProvider, useCart } from '../../contexts/CartContext';
import Product from './Product';


jest.mock('../../contexts/CartContext', () => ({
  ...jest.requireActual('../../contexts/CartContext'),
  useCart: jest.fn()
}));


const mockOnAddItem = jest.fn();

beforeEach(() => {
    mockOnAddItem.mockClear();

    (useCart as jest.Mock).mockReturnValue({
      onAddItem: mockOnAddItem
    });
});

describe('Product component', () => {
  const product = { id: 1, name: 'new product', desc: 'some product', price: 999 };

  it('should render product', () => {
      render(
        <CartProvider>
          <Product product={product} />
        </CartProvider>
      );

      const title = screen.getByText(product.name);
      const desc = screen.getByText(product.desc);
      const price = screen.getByText(`$${product.price}`);

      expect(title).toBeInTheDocument();
      expect(desc).toBeInTheDocument();
      expect(price).toBeInTheDocument();
  });

  it('calls onAddItem when "Add To Cart" is clicked', async () => {
      const user = userEvent.setup();

      render(
        <CartProvider>
          <Product product={product} />
        </CartProvider>
      );

      const button = screen.getByRole('button');

      await user.click(button);

      expect(mockOnAddItem).toHaveBeenCalledWith(product);
      expect(mockOnAddItem).toHaveBeenCalledTimes(1);

      await user.click(button);

      expect(mockOnAddItem).toHaveBeenCalledTimes(2);
  });
});

