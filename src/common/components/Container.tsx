import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const appear = keyframes`
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StyledContainer = styled.div`
  @media (min-width: 760px) {
    width: 600px;
    margin: 0 auto;
  }

  ${({ shouldAppearFromLeft }: Props) =>
    shouldAppearFromLeft &&
    css`
      opacity: 0;
      transform: translateX(-4%);
      animation: ${appear} 0.5s forwards;
    `}

  ${({ shouldAppearFromRight }: Props) =>
    shouldAppearFromRight &&
    css`
      opacity: 0;
      transform: translateX(4%);
      animation: ${appear} 0.5s forwards;
    `}
`;

type Props = {
  children: React.ReactNode;
  shouldAppearFromLeft?: boolean;
  shouldAppearFromRight?: boolean;
};

const Container = ({ children, ...restProps }: Props) => (
  <StyledContainer {...restProps}>{children}</StyledContainer>
);

export default Container;
