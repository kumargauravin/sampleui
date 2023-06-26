import type { ReactNode } from 'react';

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
