import React from 'react';

const TodoList = (props) => {
  const { listItems } = props;

  return (
    <>
      {listItems.map((item, i) => {
        return <div key={i}>{item.description}</div>
      })}
    </>
  );
};

export default TodoList;