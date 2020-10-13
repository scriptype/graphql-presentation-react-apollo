import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textColor};
  font-family: IBMPlexSans, helvetica, arial, sans-serif;
  transition: padding 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0.25rem;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  padding: 6.6rem 3rem 3rem;
  background: ${({ theme }) => theme.contentBackground};
  transition: padding 0.3s;

  @media (min-width: calc(1440px + 4rem)) {
    width: 1440px;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3rem 1.5rem 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1rem 0.4rem 0.4rem;
  }
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutContainer>
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;
