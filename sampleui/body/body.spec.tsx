import React from 'react';
import { render } from '@testing-library/react';
import { BasicBody } from './body.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicBody />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
