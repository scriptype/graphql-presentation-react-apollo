import React from 'react';
import styled from 'styled-components';

const PillContainer = styled.div``;

type Props = {
  icon: string;
  text: string;
};

const Icon = ({ src }: { src: string }) => <>{src[0].toUpperCase()}</>;

const Pill = ({ icon, text }: Props) => (
  <PillContainer>
    <Icon src={icon} />
    {text}
  </PillContainer>
);

export default Pill;
