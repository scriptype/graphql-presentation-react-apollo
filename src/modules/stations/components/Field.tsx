import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { capitalize } from 'common/utils';

type Props = {
  label: string;
  value: string | boolean | number | null;
  type: object;
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

const BooleanValue = styled.span`
  display: inline-block;
  position: relative;
  width: 2.5rem;
  height: 1.5rem;
  margin-top: 0.1rem;
  border-radius: 1rem;
  border: 1px solid currentColor;
  font-size: 0;
  color: ${({ value, theme }: { value: boolean; theme: any }) =>
    !!value ? '#60ca46' : theme.colors.darkGray};

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
    left: ${({ value }: { value: boolean }) => (!!value ? '70%' : '30%')};
  }
`;

const Field = ({ label, value, type }: Props) => {
  return (
    <Container>
      <Label>{capitalize(label)}</Label>
      {type === Boolean ? (
        <BooleanValue value={value as boolean}>{String(value)}</BooleanValue>
      ) : type === Date && !!value ? (
        <Value>{moment(value as string).format('D MMM YYYY, HH:MM')}</Value>
      ) : (
        <Value>{value}</Value>
      )}
    </Container>
  );
};

export default Field;
