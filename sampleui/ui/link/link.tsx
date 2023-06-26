import type { ReactNode } from 'react';

export type LinkProps = {
  children?: ReactNode;
};

export function Link({ children }: LinkProps) {
  return (
    <div>
      {children}
    </div>
  );
}
