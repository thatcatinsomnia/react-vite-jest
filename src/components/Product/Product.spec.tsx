import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Product from './Product';

describe('Product component', () => {
  it('should render product', () => {
      const product = { id: 1, name: 'new product', desc: 'some product', price: 999 };
      const handleAddToShoppingCart = jest.fn();

      render(
        <Product product={product} onAddToShoppingCart={handleAddToShoppingCart} />
      );

      const title = screen.getByText(product.name);
      // const desc = screen.getByText(product.desc);
      // const price = screen.getByText(product.price);

      expect(title).toBeInTheDocument();
      // expect(desc).toBeInTheDocument();
      // expect(price).toBeInTheDocument();
  });
});

