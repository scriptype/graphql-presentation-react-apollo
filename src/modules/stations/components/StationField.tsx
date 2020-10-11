import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import moment from 'moment';

import { capitalize } from 'common/utils';

export type FieldType = 'string' | 'number' | 'boolean' | 'date' | 'connector';

type Props = {
  label: string;
  value: any;
  type: FieldType;
};

type FieldTypeRenderers = {
  [key in FieldType]: (props: Props) => React.ReactNode;
};

type ConnectorFieldType = {
  type: string;
  currentType: string;
  status: string;
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

type BooleanValueProps = React.HTMLAttributes<HTMLSpanElement> & {
  value: boolean;
  theme: DefaultTheme;
};
const BooleanValue = styled(({ value, ...rest }: BooleanValueProps) => (
  <span {...rest} />
))`
  display: inline-block;
  position: relative;
  width: 2.5rem;
  height: 1.5rem;
  margin-top: 0.1rem;
  border-radius: 1rem;
  border: 1px solid currentColor;
  font-size: 0;
  color: ${({ value, theme }) =>
    !!value ? theme.colors.green : theme.colors.darkGray};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background: currentColor;
    left: ${({ value }) => (!!value ? '70%' : '30%')};
  }
`;

const ConnectorValueContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.25rem;
  margin-top: 0.1rem;
`;

type ConnectorValueType = React.HTMLAttributes<HTMLSpanElement> & {
  status: string;
};
const ConnectorValue = styled(({ status, ...rest }: ConnectorValueType) => (
  <span {...rest} />
))`
  display: flex;
  max-width: max-content;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ status, theme }) =>
    status === 'Operative'
      ? css`
          ${ConnectorValueCurrentType} {
            background: ${theme.colors.green};
            color: white;
          }
        `
      : status === 'Inoperative'
      ? css`
          ${ConnectorValueCurrentType} {
            background: ${theme.colors.red};
            color: white;
          }
        `
      : null}
`;

const ConnectorValueCurrentType = styled.span`
  padding-right: 0.3rem;
  padding-left: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: inset 0 -0.3rem 1.25rem -0.7rem rgba(0, 0, 0, 0.25);
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
`;

const ConnectorValueName = styled.span`
  padding-right: 0.5rem;
  padding-left: 0.3rem;
  font-size: 0.9rem;
  box-shadow: inset 0 -0.3rem 1.25rem -0.7rem rgba(0, 0, 0, 0.25);
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
`;

const fieldTypeRenderers: FieldTypeRenderers = {
  string: ({ value }: Props) => <Value>{value}</Value>,

  number: ({ value }: Props) => <Value>{value}</Value>,

  boolean: ({ value }: Props) => (
    <BooleanValue value={value as boolean}>{String(value)}</BooleanValue>
  ),

  date: ({ value }: Props) => (
    <Value>
      {value && moment(value as string).format('D MMM YYYY, HH:MM')}
    </Value>
  ),

  connector: ({ value }: Props) => (
    <ConnectorValueContainer>
      {value.map((connector: ConnectorFieldType) => (
        <ConnectorValue key={`${connector.type}`} status={connector.status}>
          <ConnectorValueCurrentType>
            {connector.currentType}
          </ConnectorValueCurrentType>
          <ConnectorValueName>{connector.type}</ConnectorValueName>
        </ConnectorValue>
      ))}
    </ConnectorValueContainer>
  ),
};

const StationField = ({ label, value, type }: Props) => {
  return (
    <Container>
      <Label>{capitalize(label)}</Label>
      {fieldTypeRenderers[type]({ label, value, type })}
    </Container>
  );
};

export default StationField;
