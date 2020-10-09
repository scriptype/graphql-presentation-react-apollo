import React from 'react';
import { ApolloError } from '@apollo/client';

type Props = {
  loading: boolean;
  error: ApolloError | undefined;
  children: React.ReactNode;
};

const LoadingOverlay = ({ loading, error, children }: Props) =>
  loading ? (
    <>Loading...</>
  ) : error ? (
    <>Error: {error.message}</>
  ) : (
    <>{children}</>
  );

export default LoadingOverlay;
