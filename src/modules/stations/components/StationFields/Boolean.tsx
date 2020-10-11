import React from 'react';
import styled from 'styled-components';

type BooleanFieldProps = React.HTMLAttributes<HTMLSpanElement> & {
  value: boolean;
};
const BooleanValue = styled(({ value, ...rest }: BooleanFieldProps) => (
  <span {...rest} />
))`
  display: inline-block;
  position: relative;
  width: 2.5rem;
  height: 1.5rem;
  margin-top: 0.1rem;
  border-radius: 1rem;
  border: 1px solid currentColor;
  font-size: 0;
  color: ${({ value, theme }) =>
    !!value ? theme.colors.green : theme.colors.darkGray};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background: currentColor;
    left: ${({ value }) => (!!value ? '70%' : '30%')};
  }
`;

const BooleanField = (value: boolean) => (
  <BooleanValue value={value}>{String(value)}</BooleanValue>
);

export default BooleanField;
