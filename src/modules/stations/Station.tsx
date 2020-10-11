import React, { useMemo } from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

import { omit } from 'common/utils';
import Container from './components/Container';
import GoBackButton from './components/GoBackButton';
import Title from './components/Title';
import LoadingOverlay from './components/LoadingOverlay';
import StationField, { FieldType } from './components/StationField';

const TitleRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 1.5rem;
`;

const FieldsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  column-gap: 1rem;
  row-gap: 2rem;
  place-content: start;
  min-height: 450px;
  padding: 1.25rem 1.5rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

type CustomFieldType = 'connector';
const StationModel: { [key: string]: FieldType | CustomFieldType } = {
  id: 'number',
  name: 'string',
  status: 'string',
  inuse: 'date',
  currency: 'string',
  available: 'boolean',
  connected: 'boolean',
  disabled: 'boolean',
  connectors: 'connector',
};

export type StationType = typeof StationModel;

type Props = {
  stationId: number;
  initialStationData: StationType;
  fromList: boolean;
};

const Station = ({ stationId, initialStationData, fromList }: Props) => {
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
        connectors {
          type
          currentType
          status
        }
      }
    }
  `,
    [stationId]
  );

  const { loading, error, data } = useQuery(GET_STATION);

  const fields = omit(Object.keys(StationModel), '__typename');

  const goBackProperties = {
    pathname: '/stations',
    state: { fromStation: true },
  };

  return (
    <Container shouldAppearFromRight={!!fromList}>
      {loading && (
        <TitleRow>
          {initialStationData && (
            <Helmet>
              <title>{initialStationData.name} / React-Apollo</title>
            </Helmet>
          )}
          <GoBackButton to={goBackProperties} />
          <Title>{initialStationData?.name || 'Loading...'}</Title>
        </TitleRow>
      )}
      <LoadingOverlay loading={loading} error={error}>
        {data && (
          <>
            <Helmet>
              <title>{data.station.name} / React-Apollo</title>
            </Helmet>
            <TitleRow>
              <GoBackButton to={goBackProperties} />
              <Title>{data.station.name}</Title>
            </TitleRow>
            <FieldsContainer>
              {fields.map((key: string) => (
                <StationField
                  key={`station-field-${key}`}
                  label={key}
                  value={data.station[key]}
                  type={StationModel[key]}
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
