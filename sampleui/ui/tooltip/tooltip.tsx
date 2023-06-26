import type { ReactNode } from 'react';

export type TooltipProps = {
  children?: ReactNode;
};

export function Tooltip({ children }: TooltipProps) {
  return (
    <div>
      {children}
    </div>
  );
}
