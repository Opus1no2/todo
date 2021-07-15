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
    list,
    selectedList,
    setSelectedList,
    setListId,
  } = props;

  const handleClick = () => {
    setSelectedList(list.id);
    setListId(list.id);
  };

  return (
    <ListBtn
      selected={selectedList}
      onClick={handleClick}
    >
      {list.description}
    </ListBtn>
  );
};

const TodoLists = (props) => {
  const { setListId, todoLists } = props;
  const [selectedList, setSelectedList] = useState(todoLists[0].id);

  useEffect(() => {
    setListId(selectedList);
  }, [setListId, selectedList]);

  return (
    <ListNav>
      <NavList>
        {todoLists.map((list, i) => {
          return (
            <ListItem key={i}>
              <ListButton
                selectedList={selectedList === list.id}
                setSelectedList={setSelectedList}
                setListId={setListId}
                list={list}
              />
            </ListItem>
          );
        })}
      </NavList>
    </ListNav>
  )
};

export default TodoLists;