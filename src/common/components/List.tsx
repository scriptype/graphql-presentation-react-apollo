import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

const ListContainer = styled.div`
  display: grid;
  grid-row-gap: 0.5rem;
`;

const appear = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ListItemStyles = css`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 1rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius};

  opacity: 0;
  transform: translateY(-20%);
  animation: ${appear} 0.3s calc(0.04s * var(--item-index)) forwards;
`;

const ListItem = styled.div`
  ${ListItemStyles}
`;

const ListLinkItem = styled(Link)`
  ${ListItemStyles};
  color: inherit;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2.5%);
  }

  &:active {
    box-shadow: inset 0.1rem 0.1rem 0.25rem rgba(0, 0, 0, 0.15);
    transform: translateY(0);
  }
`;

const ListItemPrimarySlot = styled.p`
  font-weight: bold;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 200px;
  }
`;

const ListItemSecondarySlot = styled.div``;

type ItemType = {
  key: string;
  text: string;
  linkTo?: object;
  secondarySlot?: () => React.ReactNode;
};

type Props = {
  items: ItemType[];
};

const List = ({ items }: Props) => {
  const itemContents: { [key: string]: React.ReactNode } = useMemo(() => {
    return items
      .map((item) => ({
        key: item.key,
        content: (
          <>
            <ListItemPrimarySlot>{item.text}</ListItemPrimarySlot>
            {item.secondarySlot && (
              <ListItemSecondarySlot>
                {item.secondarySlot()}
              </ListItemSecondarySlot>
            )}
          </>
        ),
      }))
      .reduce(
        (contents, item) => ({
          ...contents,
          [item.key]: item.content,
        }),
        {}
      );
  }, [items]);

  return (
    <ListContainer>
      {items.map((item, index) =>
        item.linkTo ? (
          <ListLinkItem
            to={item.linkTo}
            key={item.key}
            style={{ '--item-index': index } as any}
          >
            {itemContents[item.key]}
          </ListLinkItem>
        ) : (
          <ListItem key={item.key} style={{ '--item-index': index } as any}>
            {itemContents[item.key]}
          </ListItem>
        )
      )}
    </ListContainer>
  );
};

export default List;
