import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from 'theme';
import List from './List';

test('Renders basic items', () => {
  const listItems = [
    {
      key: 'unique',
      text: 'Item content 1',
    },
  ];

  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <List items={listItems} />
    </ThemeProvider>
  );

  const childElement1 = getByText('Item content 1');
  expect(childElement1).toBeInTheDocument();
});

test('Renders secondarySlot', () => {
  const listItems = [
    {
      key: 'unique-2-slots',
      text: 'Item content 2',
      secondarySlot: () => <button>Hello</button>,
    },
  ];

  const { getByText, getByRole } = render(
    <ThemeProvider theme={theme}>
      <List items={listItems} />
    </ThemeProvider>
  );

  const childElement = getByText('Item content 2');
  expect(childElement).toBeInTheDocument();
  const secondSlot = getByRole('button');
  expect(secondSlot).toBeInTheDocument();
  expect(secondSlot).toHaveTextContent(/Hello/);
});

test('Renders link item', () => {
  const listItems = [
    {
      key: 'unique-link',
      text: 'Item content 3',
      linkTo: {
        pathname: '/destination',
      },
    },
  ];

  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Router>
        <List items={listItems} />
      </Router>
    </ThemeProvider>
  );

  const childElement4 = getByText('Item content 3');
  expect(childElement4).toBeInTheDocument();
  fireEvent(
    childElement4,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(document.location.href.match(/destination/)).toBeTruthy();
});
