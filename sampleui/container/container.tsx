import type { ReactNode } from 'react';
import React from 'react';
export type ContainerProps = {
  children?: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div>
      {children}
    </div>
  );
}
