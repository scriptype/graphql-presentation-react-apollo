import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from 'theme';
import GoBackButton from './GoBackButton';

test('Goes to given route on click', () => {
  const { getByRole } = render(
    <ThemeProvider theme={theme}>
      <Router>
        <GoBackButton to={{ pathname: '/destination' }} />
      </Router>
    </ThemeProvider>
  );

  const button = getByRole('button');
  expect(button).toBeInTheDocument();
  fireEvent(
    button,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(document.location.href.match(/destination/)).toBeTruthy();
});
