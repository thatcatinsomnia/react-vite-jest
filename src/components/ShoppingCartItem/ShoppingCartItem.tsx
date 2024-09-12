import { type ReactNode, ComponentProps } from 'react';
import { type CartItem, useCart } from '../../contexts/CartContext';
import { IconPlus, IconMinus, IconTrash } from '@tabler/icons-react';
import ReactIcon from '../../assets/react.svg';

type Props = {
  item: CartItem; 
};

export default function ShoppingCartItem({ item }: Props) {
  const { onIncrease, onDecrease, onRemoveItem } = useCart();

  return (
    <div className="p-4 w-full flex items-center gap-4 text-slate-600 hover:bg-slate-100 transition-colors">
      <div className="bg-slate-600 size-[48px] flex items-center justify-center rounded">
        <img src={ReactIcon} alt={item.name} />
      </div>

      <div className="flex-1 flex items-center">
        <div className="flex-1 flex flex-col">
          <p className="font-semibold">{item.name}</p>

          <div className="flex items-center">
            <ActionButton onClick={() => onDecrease(item.id)}>
              <IconMinus size={10} />
            </ActionButton>
            <p className="mx-2 text-md">{item.quantity}</p>

            <ActionButton onClick={() => onIncrease(item.id)}>
              <IconPlus size={10} />
            </ActionButton>
          </div>
        </div>

        <p className="mr-6 text-lg">${item.price}</p>

        <ActionButton 
          variants="danger"
          onClick={() => onRemoveItem(item.id)}
        >
          <IconTrash size={24} className="text-rose-600" />
        </ActionButton>
      </div>
    </div>
  );
}

function ActionButton({ 
  variants, 
  children, 
  ...props 
}: { 
  variants?: 'normal' | 'danger'; 
  children: ReactNode 
} & ComponentProps<'button'>) {
  const hoverClassNames = variants === 'danger' ? 'hover:bg-rose-200' : 'hover:bg-gray-200';

  return (
    <button 
      className={`p-1 rounded ${hoverClassNames} transition-colors`} {...props}
    >
      {children}
    </button>
  );
}

