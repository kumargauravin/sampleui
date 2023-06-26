import React from 'react';
import { render } from '@testing-library/react';
import { BasicHero } from './hero.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicHero />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
