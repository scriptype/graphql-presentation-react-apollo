import React from 'react';
import styled, { css } from 'styled-components';

import { ConnectorFieldType } from '../../types';

const ConnectorValueContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.25rem;
  margin-top: 0.1rem;
`;

type ConnectorValueType = React.HTMLAttributes<HTMLSpanElement> &
  Pick<ConnectorFieldType, 'status'>;
const ConnectorValue = styled(({ status, ...rest }: ConnectorValueType) => (
  <span {...rest} />
))`
  display: flex;
  max-width: max-content;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ status, theme: { colors } }) =>
    css`
      ${ConnectorValueCurrentType} {
        background: ${status === 'Operative' ? colors.green : colors.red};
        color: white;
      }
    `}
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

const ConnectorField = (value: ConnectorFieldType[]) => (
  <ConnectorValueContainer>
    {value.map((connector) => (
      <ConnectorValue
        title={`Connector is ${connector.status.toLowerCase()}`}
        key={`${connector.type}`}
        status={connector.status}
      >
        <ConnectorValueCurrentType aria-label="Current type">
          {connector.currentType}
        </ConnectorValueCurrentType>
        <ConnectorValueName aria-label="Type">
          {connector.type}
        </ConnectorValueName>
      </ConnectorValue>
    ))}
  </ConnectorValueContainer>
);

export default ConnectorField;
