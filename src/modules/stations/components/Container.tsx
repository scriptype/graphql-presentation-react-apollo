import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding-top: 3.6rem;

  @media (min-width: 760px) {
    width: 600px;
    margin: 0 auto;
  }
`;

type Props = {
  children: React.ReactNode;
};

const Container = ({ children, ...restProps }: Props) => (
  <StyledContainer {...restProps}>{children}</StyledContainer>
);

export default Container;
