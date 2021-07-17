import React, { useEffect, useState } from 'react';
import * as fromApi from './api/todoLists';
import * as fromTodoList from './api/todoList';

import TodoLists from './TodoLists';
import styled from 'styled-components';
import Nav from './Nav';
import TodoList from './TodoList';
import TextInput from './TextInput';

const DashboardCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;
`;

const Cont = styled.div`
  display: flex;
  flex: 1;
`;

const Row = styled.div`
  display: flex;
`;

const ListCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex: 1;
`;

const ItemInput = styled(TextInput)`
  margin-bottom: 4rem;
  justify-self: flex-end;
`;

const Dashboard = () => {
  const [listId, setListId] = useState();
  const [todoLists, setTodoLists] = useState([]);
  const [listItems, setListItems] =  useState([]);

  useEffect(() => {
    fromApi.todoLists().then((resp) => {
      setTodoLists(resp.data);
    });
  }, []);

  useEffect(() => {
    fromTodoList.todoList(listId).then((resp) => {
      setListItems(resp.data);
    });
  }, [listId]);

  const handleCreate = (e) => {
    const description = e.target.value;

    if (e.key === "Enter") {
      fromTodoList.createListItem(listId, description).then((resp) => {
        setListItems(listItems.concat(resp.data));
        e.target.value = null;
      });
    }
  };

  return (
    <DashboardCont>
      <Row>
        <Nav />
      </Row>
      <Cont>
        {todoLists.length ? <TodoLists todoLists={todoLists} setListId={setListId} /> : null}
        <ListCont>
          {listItems.length ? <TodoList listId={listId} listItems={listItems} setListItems={setListItems} /> : null}
          <ItemInput onKeyPress={handleCreate} placeholder="new item" />
        </ListCont>
      </Cont>
    </DashboardCont>
  );
};

export default Dashboard;
