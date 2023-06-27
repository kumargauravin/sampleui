import type { ReactNode } from 'react';
import React from 'react';

export type BannerProps = {
  children?: ReactNode;
};

export function Banner({ children }: BannerProps) {
  return (
    <div>
      {children}
    </div>
  );
}
