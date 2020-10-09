import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textColor};
  font-family: IBMPlexSans, helvetica, arial, sans-serif;
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 48px;
  background: ${({ theme }) => theme.contentBackground};

  @media (min-width: calc(1440px + 32px * 2)) {
    width: 1440px;
    margin: 0 auto;
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
