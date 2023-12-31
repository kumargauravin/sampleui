import type { ReactNode } from 'react';
import React from 'react';
export type VideoProps = {
  children?: ReactNode;
};

export function Video({ children }: VideoProps) {
  return (
    <div>
      {children}
    </div>
  );
}
