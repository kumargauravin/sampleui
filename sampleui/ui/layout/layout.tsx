import type { ReactNode } from 'react';

export type LayoutProps = {
  children?: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
}
