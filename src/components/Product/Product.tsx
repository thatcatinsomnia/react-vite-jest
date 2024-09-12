import { type Product } from '../../App';
import { useCart } from '../../contexts/CartContext';
import Button from '../Button';
import ReactIcon from '../../assets/react.svg';

type Props = {
  product: {
    id: number;
    name: string;
    desc: string;
    price: number;
  };
};

export default function Product({ product }: Props) {
  const { onAddItem } = useCart();

  return (
    <div className="h-[460px] w-[280px] flex flex-col rounded overflow-hidden border border-slate-200">
      <div className="bg-slate-700 h-[240px] grid place-items-center text-gray-50 italic text-3xl">
        <img 
          src={ReactIcon} 
          className="animate-[spin_30s_linear_infinite]"
          width={80} 
          height={80} 
        /> 
      </div>

      <div className="p-4 flex-1 flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-slate-700">{product.name}</h3>
        <p className="text-gray-500 italic">{product.desc}</p>
        <p className="text-lg">${product.price}</p>

        <Button onClick={() => onAddItem(product)}>Add to Cart</Button>
      </div>
    </div>
  );
}

