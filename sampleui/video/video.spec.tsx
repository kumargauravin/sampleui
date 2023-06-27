import React from 'react';
import { render } from '@testing-library/react';
import { BasicVideo } from './video.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicVideo />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
