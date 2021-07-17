import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as fromApi from './api/todoList';
import TextInput from './TextInput';

const ItemDisplay = styled.div`
  padding: .5rem;
  flex: 1;
`;

const ListItem = styled.div`
  display: ${props => props.completed ? 'none' : 'flex'};
  align-items: center;
  border-bottom: solid 1px #d0e3ff;
`;

const ListItemInput = styled(TextInput)`
  border-bottom: none;
`;

const TodoListItem = (props) => {
  const { item, listId, selected, setSelected, handleComplete } = props;
  const [description, setDescription] = useState(item.description);

  useEffect(() => {
    setDescription(item.description);
  }, [item.description, setDescription]);

  const handleKeyPress = (e) => {
    const newDescription = e.target.value;

    if (e.key === "Enter" && newDescription.length && newDescription !== description) {
      setSelected(null);

      fromApi.updateListItem(item.id, listId, { description: newDescription }).then((resp) => {
        setDescription(resp.data.description);
      });
    }
  };

  const handleBlur = (e) => {
    setSelected(null);

    const newDescription = e.target.value;

    if (newDescription.length && newDescription !== description) {
      fromApi.updateListItem(item.id, listId, { description: newDescription }).then((resp) => {
        setDescription(resp.data.description);
      });
    }
  };

  return (
    <ListItem completed={item.completed_at}>
      <input type="radio" onChange={handleComplete} value={item.id} />
      {selected ?
        <ListItemInput
          type="text"
          autoFocus
          onKeyPress={handleKeyPress}
          onBlur={handleBlur}
          placeholder={description}
        /> :
        <ItemDisplay onClick={() => setSelected(item.id)}>{description}</ItemDisplay>}
    </ListItem>
  );
};

const TodoList = (props) => {
  const { listId, listItems, handleComplete } = props;
  const [selected, setSelected] = useState(false);

  return (
    <>
      {listItems.map((item, i) => {
        return (<TodoListItem
                  key={i}
                  item={item}
                  listId={listId}
                  selected={selected === item.id}
                  setSelected={setSelected}
                  handleComplete={handleComplete}
                />);
      })}

    </>
  );
};

export default TodoList;
