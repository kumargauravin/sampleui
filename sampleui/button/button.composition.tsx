import { Button } from './button';
import React from 'react';
import { ThemeProvider } from '@kumargauravin/sampleui.mui.theme.theme-provider';

export const BasicButton = () => {
  return (
    <ThemeProvider>
      <Button variant="outlined">hello world!</Button>
    </ThemeProvider>
  );
}
