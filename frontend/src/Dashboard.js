import React, { useEffect, useState } from 'react';
import * as fromApi from './api/todoLists';
import * as fromTodoList from './api/todoList';

import TodoLists from './TodoLists';
import styled from 'styled-components';
import Nav from './Nav';
import TodoList from './TodoList';

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
  flex: 1;
  padding: 1rem;
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

  return (
    <DashboardCont>
      <Row>
        <Nav />
      </Row>
      <Cont>
        {todoLists.length ? <TodoLists todoLists={todoLists} setListId={setListId} /> : null}
        <ListCont>
         {listItems.length ? <TodoList listId={listId} listItems={listItems} /> : null}
        </ListCont>
      </Cont>
    </DashboardCont>
  );
};

export default Dashboard;