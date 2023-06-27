import type { ReactNode } from 'react';
import React from 'react';
export type GridProps = {
  children?: ReactNode;
};

export function Grid({ children }: GridProps) {
  return (
    <div>
      {children}
    </div>
  );
}
