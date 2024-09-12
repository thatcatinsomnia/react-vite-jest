import { useState } from 'react';
import { IconShoppingCart, IconMoodEmpty, IconX } from '@tabler/icons-react';
import { useCart } from '../../contexts/CartContext';
import ShoppingCartItem from '../ShoppingCartItem';

export default function ShoppingCart() {
  const [opened, setOpened] = useState(false);
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => {
    return item.quantity * item.price + sum;
  }, 0);

  const buttonHoverClassNames = opened ? 'bg-slate-600/90' : 'bg-slate-600';

  const handleCartOpen = () => {
      setOpened(opened => !opened);
  };

  return (
      <div className="fixed right-6 bottom-6">
        <button 
          className={`size-14 rounded-full ${buttonHoverClassNames} text-gray-50 grid place-items-center shadow`}
          onClick={handleCartOpen}
        >
          {opened ? (
            <IconX />
          ) : (
            <div className="grid grid-cols-1 grid-rows-1 place-items-center">
              <IconShoppingCart size={22} />
              <span className="text-xs leading-none">{cart.length}</span>
            </div>
          )}
        </button>

        {opened && (
          <div className="w-[320px] h-[320px] bg-white border border-gray-300 absolute right-0 bottom-[calc(100%+8px)] rounded-md shadow-sm overflow-hidden">
            {cart.length > 0 ? (
              <div className="pb-16 w-full h-full overflow-y-scroll">
                {cart.map(item => <ShoppingCartItem key={item.id} item={item} />)}
              </div>
            ) : (
              <Empty />
            )}

            {cart.length > 0 && (
              <p className="px-8 py-2 absolute bottom-0 right-0 left-0 bg-white text-slate-700 text-right border-t border-gray-200">
                <small className="mr-2">Total:</small>
                <span className="font-bold text-red-500">${total}</span>
              </p>
            )}
          </div>
        )}
      </div>
  );
}

function Empty() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-lg tracking-widest text-slate-400">
      <IconMoodEmpty size={40} className="animate-bounce" />
      <p className="font-bold">EMPTY</p>
    </div>
  );
}

