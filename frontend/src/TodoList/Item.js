import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { TodoListContext } from '../TodoListProvider'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ItemDisplay = styled.div`
  padding: .5rem;
  flex: 1;
`
const ListItem = styled.div`
  align-items: center;
  display: ${props => props.completed ? 'flex' : 'flex'};
  background: ${props => props.completed ? props.theme.deactivated : props.theme.mediumBlue};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  color: ${props => props.completed ? 'grey' : props.theme.fontWhite};

  border-left: solid 2px ${props => props.theme.mediumBlue};
  border-bottom: solid 1px ${props => props.theme.borderBlue};

  height: 2.7rem;

  &:hover {
    cursor: pointer;
    background: ${props => props.completed ? props.theme.deactivated : props.theme.lightBlue};
    border-left: solid 2px white;
  }
`

const CompleteBtn = styled.button(
  ({ theme }) => `
    appearance: none;
    border: solid grey 1px;
    background: ${theme.darkBlue};
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    margin-right: .5rem;
    margin-left: .5rem;

    &:hover {
      cursor: pointer;
      background: ${theme.green};
      border: solid 1px white;
    }
  `
)

const TrashIcon = styled(FontAwesomeIcon)`
  margin-right: .5rem;
`

const ItemInput = styled.input`
  appearance: none;
  border: none;
  width: 100%;
  font-size: inherit;
  background: transparent;
  color: white;

  &:focus {
    outline: none;
  }
`

const Item = (props) => {
  const { item } = props
  const { listId } = useParams()
  const [editable, setEditable] = useState(false)

  const inputEl = useRef(null)

  const {
    handleComplete,
    showComplete,
    handleDelete,
    updateTodo,
    getTodo,
    todo
  } = useContext(TodoListContext)

  const updateItem = (e) => {
    if (e.key === 'Enter') {
      updateTodo(listId, item.id, inputEl.current.value)
      inputEl.current.blur()
    }
  }

  useEffect(() => {
    if (editable) inputEl.current.focus()
  }, [editable])

  if (!showComplete && item.completed_at) return null

  return (
    <ListItem
      completed={todo.completed_at}
      onDoubleClick={() => setEditable(!editable)}
      onBlur={() => setEditable(false)}
      onKeyDown={updateItem}
    >
      { !todo.completed_at
        ? <CompleteBtn
            type="radio"
            onClick={() => handleComplete(todo)}
          ></CompleteBtn>
        : null
      }

      {editable
        ? <ItemInput ref={inputEl} placeholder={todo.description} />
        : <ItemDisplay onClick={() => getTodo(listId, todo.id)}>{todo.description}</ItemDisplay>
      }

      <TrashIcon icon={faTrashAlt} onClick={() => handleDelete(todo)} />
    </ListItem>
  )
}

Item.propTypes = {
  item: PropTypes.any
}

export default Item
