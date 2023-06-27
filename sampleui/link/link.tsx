import type { ReactNode } from 'react';
import React from 'react';
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
