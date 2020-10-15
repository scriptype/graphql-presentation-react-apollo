import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from 'theme';
import Title from './Title';

test('Renders text', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Title>My Title</Title>
    </ThemeProvider>
  );
  const textContent = getByText(/My Title/);
  expect(textContent).toBeInTheDocument();
});

test('Passes through props', () => {
  const { baseElement } = render(
    <ThemeProvider theme={theme}>
      <Title id="myTitle" className="my-title">
        My Title
      </Title>
    </ThemeProvider>
  );
  const element = baseElement.querySelector('#myTitle.my-title');
  expect(element).toBeInTheDocument();
});
