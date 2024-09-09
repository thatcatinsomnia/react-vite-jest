import { type ReactNode } from 'react';

export default function Wrapper({ children, className }: { children: ReactNode, className: string }) {
  return (
    <div className={`mx-auto py-8 max-w-4xl ${className}`}>{children}</div>
  );
}

