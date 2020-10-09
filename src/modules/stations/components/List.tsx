import React, { useMemo } from 'react';
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

const ListLinkItem = styled.div`
  ${ListItemStyles}
`;

const ListItemPrimarySlot = styled.p`
  font-weight: bold;
`;

const ListItemSecondarySlot = styled.div``;

type ItemType = {
  key: string;
  text: string;
  linkTo?: boolean;
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
          <ListLinkItem key={item.key}>{itemContents[item.key]}</ListLinkItem>
        ) : (
          <ListItem key={item.key}>{itemContents[item.key]}</ListItem>
        )
      )}
    </ListContainer>
  );
};

export default List;
