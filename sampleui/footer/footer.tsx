import type { ReactNode } from 'react';
import React from 'react';
export type FooterProps = {
  children?: ReactNode;
};

export function Footer({ children }: FooterProps) {
  return (
    <div>
      {children}
    </div>
  );
}
