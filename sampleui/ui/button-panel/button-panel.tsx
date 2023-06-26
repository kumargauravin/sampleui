import type { ReactNode } from 'react';

export type ButtonPanelProps = {
  children?: ReactNode;
};

export function ButtonPanel({ children }: ButtonPanelProps) {
  return (
    <div>
      {children}
    </div>
  );
}
