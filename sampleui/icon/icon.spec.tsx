import React from 'react';
import { render } from '@testing-library/react';
import { BasicIcon } from './icon.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicIcon />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
