import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  padding: 1.2em 0 1.6em;
  font-size: 3em;
  font-weight: bold;
  letter-spacing: calc(-1rem / 40);
`;

type Props = {
  children: React.ReactNode;
};

const Title = ({ children, ...restProps }: Props) => (
  <StyledTitle {...restProps}>{children}</StyledTitle>
);

export default Title;
