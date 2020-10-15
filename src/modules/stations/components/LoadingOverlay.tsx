import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoadingText = styled.p`
  font-size: 1.2rem;
`;

const ErrorText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.red};
  margin-bottom: 1em;
`;

const ErrorLink = styled(Link)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.darkGray};
`;

type Props = {
  loading: boolean;
  error: { message: string } | undefined;
  onErrorLink?: string;
  children: React.ReactNode;
};

const LoadingOverlay = ({ loading, error, onErrorLink, children }: Props) =>
  loading ? (
    <LoadingText>Loading...</LoadingText>
  ) : error ? (
    <>
      <ErrorText>Error: {error.message}</ErrorText>
      {onErrorLink && <ErrorLink to={onErrorLink}>« Go back</ErrorLink>}
    </>
  ) : (
    <>{children}</>
  );

export default LoadingOverlay;
