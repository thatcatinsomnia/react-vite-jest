import { type ReactNode } from 'react';

export default function Header({ children }: { children: ReactNode }) {
  return (
    <header className="py-20 text-4xl font-black text-slate-600 tracking-wide text-center">{children}</header>
  );
}

