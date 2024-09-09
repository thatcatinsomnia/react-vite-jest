import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({ children, onClick, disabled = true }: Props) {
  return (
    <button 
      className={`
        mt-auto py-2 w-full bg-gray-700 hover:bg-slate-800 transition-colors text-gray-50 rounded 
        ${disabled ? 'opacity-20 pointer-events-none' : ''}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

