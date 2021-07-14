import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ListNav = styled.nav`
  width: 250px;
  background: #f0f6ff;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
`;

const ListBtn = styled.button`
  display: flex;
  flex: 1;

  border: none;
  background: ${props => props.selected ? '#d4edff' : 'white'};
  border-bottom: solid 1px #b9dfff;
  border-right: solid 1px #b9dfff;
  color: #101010;
  padding: 1rem;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background: #dff0ff;
  }
`;

const ListButton = (props) => {
  const {
    setListId,
    list,
    dataId,
    selected,
    setSelected
  } = props;

  const handleClick = (listId) => {
    setSelected(dataId);
    setListId(listId);
  };

  return <ListBtn selected={selected} onClick={() => handleClick(list.id) }>{list.description}</ListBtn>
};

const TodoLists = (props) => {
  const { setListId, todoLists } = props;
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setListId(todoLists[0].id);
  }, [todoLists, setListId]);

  return (
    <ListNav>
      <NavList>
        {todoLists.map((list, i) => {
          return (
            <ListItem key={i}>
              <ListButton dataId={i} selected={selected === i} setSelected={setSelected} setListId={setListId} list={list} />
            </ListItem>
          );
        })}
      </NavList>
    </ListNav>
  )
};

export default TodoLists;