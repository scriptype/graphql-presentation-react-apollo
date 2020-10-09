import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  padding: 3.6rem 0 4.8rem;
  font-size: 3rem;
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
