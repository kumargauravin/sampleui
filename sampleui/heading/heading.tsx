import type { ReactNode } from 'react';
import React from 'react';
export type HeadingProps = {
  children?: ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return (
    <div>
      {children}
    </div>
  );
}
