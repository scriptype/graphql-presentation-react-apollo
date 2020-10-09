import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const ListContainer = styled.div`
  display: grid;
  grid-row-gap: 0.5rem;
`;

const ListItemStyles = css`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 1rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const ListItem = styled.div`
  ${ListItemStyles}
`;

const ListLinkItem = styled(Link)`
  ${ListItemStyles};
  color: inherit;
  text-decoration: none;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.15);
  }
`;

const ListItemPrimarySlot = styled.p`
  font-weight: bold;
`;

const ListItemSecondarySlot = styled.div``;

type ItemType = {
  key: string;
  text: string;
  linkTo?: string;
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
      {items.map((item) =>
        item.linkTo ? (
          <ListLinkItem to={item.linkTo} key={item.key}>
            {itemContents[item.key]}
          </ListLinkItem>
        ) : (
          <ListItem key={item.key}>{itemContents[item.key]}</ListItem>
        )
      )}
    </ListContainer>
  );
};

export default List;
