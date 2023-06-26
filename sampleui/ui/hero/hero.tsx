import type { ReactNode } from 'react';

export type HeroProps = {
  children?: ReactNode;
};

export function Hero({ children }: HeroProps) {
  return (
    <div>
      {children}
    </div>
  );
}
