import React from 'react';
import { render } from '@testing-library/react';
import { BasicLayout } from './layout.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicLayout />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
