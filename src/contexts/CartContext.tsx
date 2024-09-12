import { type ReactNode, useState, createContext, useContext, useMemo } from 'react';
import { type Product } from '../App';

export type CartItem = Product & { quantity: number };

type Context = {
  cart: Array<CartItem>;
  onAddItem: (product: Product) => void;
  onRemoveItem: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
};

const CartContext = createContext<Context | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const onAddItem = (product: Product) => {
    const foundItemIndex = cart.findIndex(item => item.id === product.id);

    if (foundItemIndex < 0) {
      setCart([...cart, { ...product, quantity: 1 }]);
      return;
    }

    const foundItem = cart[foundItemIndex];
    const updatedCart = [
      ...cart.slice(0, foundItemIndex),
      { ...foundItem, quantity: foundItem.quantity + 1},
      ...cart.slice(foundItemIndex + 1)
    ];

    setCart(updatedCart);
  };

  const onRemoveItem = (id: number) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  }
  
  const onIncrease = (id: number) => {
    const foundIndex = cart.findIndex(item => item.id === id);
    
    const foundItem = cart[foundIndex];
    const newCart = [
      ...cart.slice(0, foundIndex),
      { ...foundItem, quantity: foundItem.quantity + 1},
      ...cart.slice(foundIndex + 1)
    ];

    setCart(newCart);
  };

  const onDecrease = (id: number) => {
    const foundIndex = cart.findIndex(item => item.id === id);
    
    const foundItem = cart[foundIndex];

    if (foundItem.quantity <= 1) {
      const newCart = cart.filter(item => item.id !== id);
      setCart(newCart);

      return;
    }

    const newCart = [
      ...cart.slice(0, foundIndex),
      { ...foundItem, quantity: foundItem.quantity - 1},
      ...cart.slice(foundIndex + 1)
    ];

    setCart(newCart);
  };

  const value = useMemo(() => ({
    cart,
    onAddItem,
    onRemoveItem,
    onIncrease,
    onDecrease
  }), [cart]);

  return (
    <CartContext.Provider 
      value={value}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('CartContext must used within a CartProvider');
  }

  return context;
}

