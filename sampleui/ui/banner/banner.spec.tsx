import React from 'react';
import { render } from '@testing-library/react';
import { BasicBanner } from './banner.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicBanner />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
