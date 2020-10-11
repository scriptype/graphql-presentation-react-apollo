import React from 'react';
import styled from 'styled-components';

const StyledSVG = styled.svg`
  width: ${({ theme, width }) => width || theme.iconSize};
  height: ${({ theme, height }) => height || theme.iconSize};
  vertical-align: middle;
`;

type Props = {
  glyph: string;
  width?: string;
  height?: string;
};

const Icon = ({ glyph, width, height }: Props) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
    >
      <use xlinkHref={`#${glyph}`} />
    </StyledSVG>
  );
};

export default Icon;
