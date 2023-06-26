import type { ReactNode } from 'react';

export type IconProps = {
  children?: ReactNode;
};

export function Icon({ children }: IconProps) {
  return (
    <div>
      {children}
    </div>
  );
}
