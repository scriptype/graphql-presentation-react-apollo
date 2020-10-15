import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Icon from 'common/components/Icon';

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background: ${({ theme }) => theme.colors.black};
  color: #fff;
  text-decoration: none;
  transition: background 0.15s;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 2.4rem;
    height: 2.4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 2rem;
    height: 2rem;
  }

  svg {
    transition: transform 0.15s;
  }

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.darkGray};

    & svg {
      transform: translateX(-5%);
    }
  }

  &:active {
    background: ${({ theme }) => theme.colors.black};

    & svg {
      transform: translateX(-10%);
    }
  }
`;

const GoBackIcon = styled(Icon)`
  width: 2.6rem;
  height: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 2rem;
    height: 1.6rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 1.6rem;
    height: 1.2rem;
  }
`;

type Props = {
  to: object;
};

var GoBackButton = ({ to }: Props) => {
  return (
    <Button to={to} role="button">
      <GoBackIcon aria-label="Go back" glyph="arrow-left" />
    </Button>
  );
};

export default GoBackButton;
