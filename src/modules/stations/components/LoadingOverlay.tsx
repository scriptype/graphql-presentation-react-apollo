import React from 'react';
import { ApolloError } from '@apollo/client';
import styled from 'styled-components';

const LoadingText = styled.p`
  font-size: 1.2rem;
`;

const ErrorText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.red};
`;

type Props = {
  loading: boolean;
  error: ApolloError | undefined;
  children: React.ReactNode;
};

const LoadingOverlay = ({ loading, error, children }: Props) =>
  loading ? (
    <LoadingText>Loading...</LoadingText>
  ) : error ? (
    <ErrorText>Error: {error.message}</ErrorText>
  ) : (
    <>{children}</>
  );

export default LoadingOverlay;
