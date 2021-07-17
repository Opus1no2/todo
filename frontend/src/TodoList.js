import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as fromApi from './api/todoList';
import TextInput from './TextInput';

const ItemDisplay = styled.div`
  border-bottom: solid 1px #d0e3ff;
  padding: .5rem;
`;

const TodoListItem = (props) => {
  const { item, listId, selected, setSelected } = props;
  const [description, setDescription] = useState(item.description);

  useEffect(() => {
    setDescription(item.description);
  }, [item.description, setDescription]);

  const handleKeyPress = (e) => {
    const newDescription = e.target.value;

    if (e.key === "Enter" && newDescription !== description) {
      setSelected(null);

      fromApi.updateListItem(item.id, listId, newDescription).then((resp) => {
        setDescription(resp.data.description);
      });
    }
  };

  const handleBlur = (e) => {
    setSelected(null);

    const newDescription = e.target.value;

    if (newDescription !== description) {
      fromApi.updateListItem(item.id, listId, newDescription).then((resp) => {
        setDescription(resp.data.description);
      });
    }
  };

  return (
    <>
      {selected ?
        <TextInput
          type="text"
          autoFocus
          onKeyPress={handleKeyPress}
          onBlur={handleBlur}
          placeholder={description}
        /> :
        <ItemDisplay onClick={() => setSelected(item.id)}>{description}</ItemDisplay>}
    </>
  );
};

const TodoList = (props) => {
  const { listId, listItems } = props;
  const [selected, setSelected] = useState(false);

  return (
    <>
      {listItems.map((item, i) => {
        return (<TodoListItem
                  key={i}
                  item={item}
                  foo={item.description}
                  listId={listId}
                  selected={selected === item.id}
                  setSelected={setSelected}
                />);
      })}

    </>
  );
};

export default TodoList;
