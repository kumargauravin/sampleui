import type { ReactNode } from 'react';
import React from 'react';
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
