import React from 'react';
import { render } from '@testing-library/react';
import { BasicGrid } from './grid.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicGrid />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
