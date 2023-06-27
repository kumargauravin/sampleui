import type { ReactNode } from 'react';
import React from 'react';
export type HeaderProps = {
  children?: ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <div>
      {children}
    </div>
  );
}
