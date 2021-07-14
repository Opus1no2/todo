import React, { useEffect } from 'react';
import styled from 'styled-components';

const ListNav = styled.nav`
  width: 250px;
  background: #333333;
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

  appearence: none;
  border: none;
  background-color: transparent;
  border-bottom: solid 1px #333333;
  padding: 1rem;
  text-transform: uppercase;
  color: #101010;
  background: white;
  border-right: solid 1px #333333;

  &:hover {
    cursor: pointer;
    background: #dff0ff;
  }
`;

const ListButton = (props) => {
  const { setListId, list } = props;

  return <ListBtn onClick={() => setListId(list.id) }>{list.description}</ListBtn>
};

const TodoLists = (props) => {
  const { setListId, todoLists } = props;

  useEffect(() => {
    setListId(todoLists[0].id);
  }, [todoLists, setListId]);

  return (
    <ListNav>
      <NavList>
        {todoLists.map((list, i) => {
          return <ListItem key={i}><ListButton setListId={setListId} list={list} /></ListItem>
        })}
      </NavList>
    </ListNav>
  )
};

export default TodoLists;