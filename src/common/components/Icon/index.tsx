import React from 'react';
import styled from 'styled-components';

import icons from './icons.svg';

const StyledSVG = styled.svg`
  width: ${({ theme }) => theme.iconSize};
  height: ${({ theme }) => theme.iconSize};
`;

type Props = {
  glyph: string;
};

const Icon = ({ glyph }: Props) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <use xlinkHref={`${icons}#${glyph}`} />
    </StyledSVG>
  );
};

export default Icon;
