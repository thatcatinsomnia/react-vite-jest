import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: Props) {
  return (
    <button 
      className="mt-auto py-2 w-full bg-slate-700 hover:bg-slate-800 text-gray-50 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

