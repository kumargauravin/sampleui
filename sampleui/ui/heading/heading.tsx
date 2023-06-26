import type { ReactNode } from 'react';

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
