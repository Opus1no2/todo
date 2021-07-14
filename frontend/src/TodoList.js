import React, { useState } from 'react';
import styled from 'styled-components';

const ItemInput = styled.input`
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-appearance: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;

  font-family: inherit;
  font-size: 100%;
  line-height: inherit;
  margin: 0;

  border-bottom: solid 1px #d0e3ff;
  padding: .5rem;
`;

const ItemDisplay = styled.div`
  border-bottom: solid 1px #d0e3ff;
  padding: .5rem;
`;

const TodoListItem = (props) => {
  const { dataId, selected, setSelected, children } = props;

  return (
    <>
      {selected ?
        <ItemInput autoFocus onBlur={() => setSelected(null)} placeholder={children} /> :
        <ItemDisplay onClick={() => setSelected(dataId)}>{children}</ItemDisplay>}
    </>
  );
};

const TodoList = (props) => {
  const { listItems } = props;
  const [selected, setSelected] = useState(false);

  return (
    <>
      {listItems.map((item, i) => {
        return <TodoListItem
                  key={i}
                  dataId={i}
                  selected={selected === i}
                  setSelected={setSelected}
                >{item.description}
                </TodoListItem>
      })}
    </>
  );
};

export default TodoList;