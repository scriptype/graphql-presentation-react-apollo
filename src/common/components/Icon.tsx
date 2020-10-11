import React from 'react';
import styled from 'styled-components';

type Props = {
  glyph: string;
};

const Icon = styled.svg.attrs(({ glyph, ...rest }: Props) => ({
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  glyph,
  children: <use xlinkHref={`#${glyph}`} />,
  ...rest,
}))`
  width: ${({ theme }) => theme.iconSize};
  height: ${({ theme }) => theme.iconSize};
`;

export default Icon;
