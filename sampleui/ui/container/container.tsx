import type { ReactNode } from 'react';

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
