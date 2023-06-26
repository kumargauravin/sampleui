import React from 'react';

import MuiButton from '@mui/material/Button';

// export type ButtonProps = {
//   children?: ReactNode;
// };

export function Button({ children, ...otherProps }: any) {
  console.log(otherProps);
  return (
    <MuiButton {...otherProps}>
      {children}
    </MuiButton>
  );
}
