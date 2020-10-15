import React from 'react';
import styled, { css } from 'styled-components';

import { ConnectorFieldType } from '../../types';
import Icon from 'common/components/Icon';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.25rem;
  margin-top: 0.1rem;
`;

type ConnectorValueType = React.HTMLAttributes<HTMLSpanElement> &
  Pick<ConnectorFieldType, 'status'>;
const Value = styled(({ status, ...rest }: ConnectorValueType) => (
  <span {...rest} />
))`
  display: flex;
  max-width: max-content;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ status, theme: { colors } }) =>
    css`
      ${CurrentType} {
        background: ${status === 'Operative' ? colors.green : colors.red};
        color: white;
      }
    `}
`;

const CurrentType = styled.span`
  padding-right: 0.3rem;
  padding-left: 0.2rem;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: inset 0 -0.3rem 1.25rem -0.7rem rgba(0, 0, 0, 0.3);
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
`;

const ValueName = styled.span`
  padding-right: 0.5rem;
  padding-left: 0.3rem;
  font-size: 0.9rem;
  box-shadow: inset 0 -0.3rem 1.25rem -0.7rem rgba(0, 0, 0, 0.3);
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
`;

const ConnectorIcon = styled(Icon)`
  vertical-align: middle;
`;

const ConnectorField = (value: ConnectorFieldType[]) => (
  <Container>
    {value.map((connector) => (
      <Value
        title={`Connector is ${connector.status.toLowerCase()}`}
        key={`${connector.type}`}
        status={connector.status}
      >
        <CurrentType aria-label="Current type">
          <ConnectorIcon glyph="connector" />
          {connector.currentType}
        </CurrentType>
        <ValueName aria-label="Type">{connector.type}</ValueName>
      </Value>
    ))}
  </Container>
);

export default ConnectorField;
