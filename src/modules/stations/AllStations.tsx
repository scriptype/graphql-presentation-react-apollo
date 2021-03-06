import React, { useMemo } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Helmet } from 'react-helmet-async';

import Title from 'common/components/Title';
import List from 'common/components/List';
import Pill from 'common/components/Pill';
import Container from 'common/components/Container';
import LoadingOverlay from './components/LoadingOverlay';

const GET_STATIONS = gql`
  query {
    allStations(first: 20) {
      id
      name
      operational
    }
  }
`;

type Props = {
  routeParams: {
    fromStation?: boolean;
  };
};

const AllStations = ({ routeParams }: Props) => {
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
          fromList: true,
          stationData: {
            name: station.name,
          },
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
    <Container shouldAppearFromLeft={!!routeParams.fromStation}>
      <Helmet>
        <title>Stations / React-Apollo</title>
      </Helmet>
      <Title>Your stations</Title>
      <LoadingOverlay loading={loading} error={error}>
        <List items={listItems} />
      </LoadingOverlay>
    </Container>
  );
};

export default AllStations;
