import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from 'theme';
import Pill from './Pill';

test('Renders text', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Pill icon="offline" text="My text" />
    </ThemeProvider>
  );
  const textContent = getByText(/My text/);
  expect(textContent).toBeInTheDocument();
});
