import type { ReactNode } from 'react';

export type ThemeProps = {
  children?: ReactNode;
};

export function Theme({ children }: ThemeProps) {
  return (
    <div>
      {children}
    </div>
  );
}
