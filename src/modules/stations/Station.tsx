import React, { useMemo } from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

import Container from './components/Container';
import Title from './components/Title';
import LoadingOverlay from './components/LoadingOverlay';
import Field from './components/Field';
import { omit } from 'common/utils';

const FieldsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  column-gap: 1rem;
  row-gap: 2rem;
  padding: 1.25rem 1.5rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const StationModel = {
  id: Number,
  name: String,
  status: String,
  inuse: Date,
  available: Boolean,
  connected: Boolean,
  disabled: Boolean,
  currency: String,
};

type Props = {
  stationId: number;
};

type StationType = typeof StationModel;

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

  const fields = omit(Object.keys(StationModel), '__typename');

  return (
    <Container>
      {loading && <Title>Loading...</Title>}
      <LoadingOverlay loading={loading} error={error}>
        {data && (
          <>
            <Title>{data.station.name}</Title>
            <FieldsContainer>
              {fields.map((key: string) => (
                <Field
                  key={`station-field-${key}`}
                  label={key}
                  value={data.station[key]}
                  type={StationModel[key as keyof StationType]}
                />
              ))}
            </FieldsContainer>
          </>
        )}
      </LoadingOverlay>
    </Container>
  );
};

export default Station;
