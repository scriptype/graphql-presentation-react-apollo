import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from 'theme';
import LoadingOverlay from './LoadingOverlay';

test('renders loading text if loading: true', (done) => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <LoadingOverlay loading={true} error={undefined}>
        <p>This element should not be rendered</p>
      </LoadingOverlay>
    </ThemeProvider>
  );

  const loadingMessage = getByText('Loading...');
  expect(loadingMessage).toBeInTheDocument();

  try {
    getByText('This element should not be rendered');
    done('Fail');
  } catch {
    done();
  }
});

test('renders error text if error is passed', (done) => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <LoadingOverlay loading={false} error={{ message: 'Some error!' }}>
        <p>This element should not be rendered</p>
      </LoadingOverlay>
    </ThemeProvider>
  );

  const errorMessage = getByText('Error: Some error!');
  expect(errorMessage).toBeInTheDocument();

  try {
    getByText('This element should not be rendered');
    done('Fail');
  } catch {
    done();
  }
});

test('renders a link on error if a link path is provided', (done) => {
  const { getByText } = render(
    <Router>
      <ThemeProvider theme={theme}>
        <LoadingOverlay
          loading={false}
          error={{ message: 'Some error!' }}
          onErrorLink="/destination"
        >
          <p>This element should not be rendered</p>
        </LoadingOverlay>
      </ThemeProvider>
    </Router>
  );

  const errorLink = getByText('« Go back');
  expect(errorLink).toBeInTheDocument();

  fireEvent(
    errorLink,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(document.location.href.match(/destination/)).toBeTruthy();

  try {
    getByText('This element should not be rendered');
    done('Fail');
  } catch {
    done();
  }
});

test('renders children if not loading and no errors', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <LoadingOverlay loading={false} error={undefined}>
        <p>This element should be rendered</p>
      </LoadingOverlay>
    </ThemeProvider>
  );

  const children = getByText('This element should be rendered');
  expect(children).toBeInTheDocument();
});
