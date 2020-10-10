import React, { useMemo } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import Container from './components/Container';
import Title from './components/Title';
import LoadingOverlay from './components/LoadingOverlay';
import List from './components/List';
import Pill from './components/Pill';

const GET_STATIONS = gql`
  query {
    allStations(first: 10) {
      id
      name
      operational
    }
  }
`;

const AllStations = () => {
  const { path } = useRouteMatch();
  const { loading, error, data } = useQuery(GET_STATIONS);

  const listItems = useMemo(() => {
    if (!data) {
      return undefined;
    }
    return data.allStations.map((station: any) => ({
      key: station.id,
      text: station.name,
      linkTo: {
        pathname: `${path}/${station.id}`,
        state: {
          name: station.name,
        },
      },
      secondarySlot: () =>
        station.operational ? (
          <Pill icon="available" text="Available" />
        ) : (
          <Pill icon="offline" text="Offline" />
        ),
    }));
  }, [data, path]);

  return (
    <Container>
      <Title>Your stations</Title>
      <LoadingOverlay loading={loading} error={error}>
        <List items={listItems} />
      </LoadingOverlay>
    </Container>
  );
};

export default AllStations;
