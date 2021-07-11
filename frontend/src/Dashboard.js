import React, { useEffect, useState } from 'react';
import * as fromApi from './api/todo_lists';

const Dashboard = () => {
  const [todoLists, setTodoLists] = useState();

  useEffect(() => {
    fromApi.todoLists().then((resp) => {
      setTodoLists(resp.data);
    });
  }, []);

  return (
    <>
      <div>Dashboard</div>
      {todoLists ? (todoLists.map((list, i) => {
        return <div key={i}>{list.description}</div>
      })) : <div>No lists created</div>}
    </>
  );
};

export default Dashboard;