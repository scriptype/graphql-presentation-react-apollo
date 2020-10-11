import React from 'react';
import styled from 'styled-components';

import Icon from 'common/components/Icon';

const PillContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 100px;
  padding: 0.3rem 0.5rem;
  font-size: 0.75rem;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 1rem;
`;

const Label = styled.span`
  padding-left: 0.3rem;
`;

type Props = {
  icon: string;
  text: string;
};

const Pill = ({ icon, text }: Props) => (
  <PillContainer>
    <Icon glyph={icon} />
    <Label>{text}</Label>
  </PillContainer>
);

export default Pill;
