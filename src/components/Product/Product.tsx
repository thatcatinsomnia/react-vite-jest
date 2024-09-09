import Button from '../Button';

type Props = {
  product: {
    id: number;
    name: string;
    desc: string;
    price: number;
  };
  onAddToShoppingCart: () => void;
};

export default function Product({ product, onAddToShoppingCart }: Props) {
  return (
    <div className="h-[460px] w-[280px] flex flex-col rounded overflow-hidden border border-slate-200">
      <div className="bg-slate-700 h-[240px] grid place-items-center text-gray-50 italic text-3xl">{product.name}</div>

      <div className="p-4 flex-1 flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-slate-800">{product.name}</h3>
        <p className="text-slate-600 italic">{product.desc}</p>
        <p className="text-lg">${product.price}</p>

        <Button onClick={onAddToShoppingCart}>Add to Cart</Button>
      </div>
    </div>
  );
}

