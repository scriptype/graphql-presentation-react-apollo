import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  padding-bottom: 1.6em;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: calc(-1rem / 40);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};

const Title = ({ children, ...restProps }: Props) => (
  <StyledTitle {...restProps}>{children}</StyledTitle>
);

export default Title;
