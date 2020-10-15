import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { capitalize, DATE_FORMAT } from 'common/utils';
import { StationFieldType } from '../../types';
import BooleanField from './Boolean';
import ConnectorField from './Connector';

type Props = {
  label: string;
  value: any;
  type: StationFieldType;
};

type FieldTypeRenderers = {
  [key in StationFieldType]: (value: Props['value']) => React.ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5rem;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
`;

const Value = styled.span`
  word-break: break-word;
`;

const fieldTypeRenderers: FieldTypeRenderers = {
  string: (value: string) => <Value>{value}</Value>,
  number: (value: number) => <Value>{value}</Value>,
  boolean: BooleanField,
  connector: ConnectorField,
  date: (value: string | null) => (
    <Value>
      {value && moment.utc(value, moment.ISO_8601).format(DATE_FORMAT)}
    </Value>
  ),
};

const StationField = ({ label, value, type }: Props) => {
  return (
    <Container>
      <Label>{capitalize(label)}</Label>
      {fieldTypeRenderers[type](value)}
    </Container>
  );
};

export default StationField;
