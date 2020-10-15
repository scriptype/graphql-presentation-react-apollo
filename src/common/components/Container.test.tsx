import React from 'react';
import { render } from '@testing-library/react';

import Container from './Container';

const childTextContent = 'Hello';
const Child = () => <button type="button">{childTextContent}</button>;

test('Renders children', () => {
  const { getByRole } = render(
    <Container>
      <Child />
    </Container>
  );
  const childElement = getByRole('button');
  expect(childElement).toHaveTextContent(new RegExp(childTextContent));
});

test('Passes through props', () => {
  const { baseElement } = render(
    <Container className="my-container" aria-hidden="true" id="myContainer">
      <Child />
    </Container>
  );
  const element = baseElement.querySelector(
    '#myContainer.my-container[aria-hidden="true"]'
  );
  expect(element).toBeInTheDocument();
});
