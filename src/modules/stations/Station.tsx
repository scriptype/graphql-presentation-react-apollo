import React, { useMemo } from 'react';
import { gql, useQuery } from '@apollo/client';

import Container from './components/Container';
import Title from './components/Title';
import LoadingOverlay from './components/LoadingOverlay';

type Props = {
  stationId: number;
};

const Station = ({ stationId }: Props) => {
  const GET_STATION = useMemo(
    () => gql`
    query {
      station(id: ${stationId}) {
        id
        name
        status
        available
        connected
        disabled
        currency
        inuse
      }
    }
  `,
    [stationId]
  );

  const { loading, error, data } = useQuery(GET_STATION);

  return (
    <Container>
      {loading && <Title>Loading...</Title>}
      <LoadingOverlay loading={loading} error={error}>
        {data && (
          <>
            <Title>{data.station.name}</Title>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </>
        )}
      </LoadingOverlay>
    </Container>
  );
};

export default Station;
