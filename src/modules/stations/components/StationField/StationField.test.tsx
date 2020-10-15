import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from 'theme';
import StationField from './';

test('renders string field', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <StationField label="field 1" value="Value 1" type="string" />
    </ThemeProvider>
  );

  const label = getByText('Field 1');
  expect(label).toBeInTheDocument();

  const value = getByText('Value 1');
  expect(value).toBeInTheDocument();
});

test('renders number field', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <StationField label="field 2" value={25} type="number" />
    </ThemeProvider>
  );

  const label = getByText('Field 2');
  expect(label).toBeInTheDocument();

  const value = getByText('25');
  expect(value).toBeInTheDocument();
});

test('renders date field', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <StationField
        label="field 3"
        value="2036-09-18T03:11:47.000Z"
        type="date"
      />
    </ThemeProvider>
  );

  const label = getByText('Field 3');
  expect(label).toBeInTheDocument();

  const value = getByText('18 Sep 2036, 03:11 UTC');
  expect(value).toBeInTheDocument();
});

test('renders boolean field', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <StationField label="field 4" value={false} type="boolean" />
    </ThemeProvider>
  );

  const label = getByText('Field 4');
  expect(label).toBeInTheDocument();

  const value = getByText('false');
  expect(value).toBeInTheDocument();
});

test('renders connector field', () => {
  const { getByTitle, getByText } = render(
    <ThemeProvider theme={theme}>
      <StationField
        label="field 5"
        value={[
          {
            type: 'Lorem',
            currentType: 'XY',
            status: 'Awesome',
          },
          {
            type: 'Ipsum',
            currentType: '12',
            status: 'Okay',
          },
        ]}
        type="connector"
      />
    </ThemeProvider>
  );

  expect(getByText('Field 5')).toBeInTheDocument();

  expect(getByText('Lorem')).toBeInTheDocument();
  expect(getByText('XY')).toBeInTheDocument();
  expect(getByTitle('Connector is awesome')).toBeInTheDocument();

  expect(getByText('Ipsum')).toBeInTheDocument();
  expect(getByText('12')).toBeInTheDocument();
  expect(getByTitle('Connector is okay')).toBeInTheDocument();
});
