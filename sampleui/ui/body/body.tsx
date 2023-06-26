import type { ReactNode } from 'react';

export type BodyProps = {
  children?: ReactNode;
};

export function Body({ children }: BodyProps) {
  return (
    <div>
      {children}
    </div>
  );
}
