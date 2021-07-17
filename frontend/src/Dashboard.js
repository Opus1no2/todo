import React, { useEffect, useState } from 'react';
import * as fromApi from './api/todoLists';
import * as fromTodoList from './api/todoList';

import TodoLists from './TodoLists';
import styled from 'styled-components';
import Header from './Header';
import TodoList from './TodoList';
import TextInput from './ui/TextInput';

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
  background: #ececec;
  width: 100%;
`;

const ListInput = styled(TextInput)`
  background: white;
  width: 100%;
  padding: 1rem;
  border-right: solid 1px #b9dfff;
  border-bottom: solid 1px #b9dfff;
`;

const ListNav = styled.nav`
  width: 250px;
  background: #f0f6ff;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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
    if (!listId) return

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

  const handleComplete = (e) => {
    fromTodoList.updateListItem(e.target.value, listId, { completed_at: Date() }).then((resp) => {
      const newList = listItems.filter((item) => {
        return item.id !== resp.data.id;
      });
      setListItems(newList.concat(resp.data));
    });
  };

  const createList = (e) => {
    if (!e.target.value) return

    if (e.key === "Enter") {
      fromApi.createList(e.target.value).then((resp) => {
        setTodoLists(todoLists.concat(resp.data));
        e.target.value = null;
      });
    }
  };

  return (
    <DashboardCont>
      <Row>
        <Header />
      </Row>
      <Cont>
        <ListNav>
          <NavList>
            <TodoLists todoLists={todoLists} setListId={setListId} />
            <ListInput onKeyPress={createList} placeholder="NEW LIST" />
          </NavList>
        </ListNav>
        <ListCont>
          {listItems.length ? <TodoList listId={listId} listItems={listItems} handleComplete={handleComplete} /> : null}
          <ItemInput onKeyPress={handleCreate} placeholder="new item" />
        </ListCont>
      </Cont>
    </DashboardCont>
  );
};

export default Dashboard;
