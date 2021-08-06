import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { TodoListContext } from '../TodoListProvider'

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

  &:hover {
    cursor: pointer;
    background: ${props => props.completed ? props.theme.deactivated : props.theme.lightBlue};
    border-left: solid 2px white;
  }
`

const DeleteBtn = styled.button`
  border: none;
  background: transparent;
  font-size: 1rem;
  color: white;

  &:hover {
    cursor: pointer;
  }
`

const CompleteBtn = styled.button(
  ({ theme }) => `
    appearance: none;
    border: solid grey 1px;
    background: ${theme.darkBlue};
    height: 14px;
    width: 14px;
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

const Item = (props) => {
  const {
    item
  } = props

  const {
    handleComplete,
    showComplete,
    handleDelete,
    getTodo
  } = useContext(TodoListContext)

  const [description, setDescription] = useState(item.description)

  useEffect(() => {
    setDescription(item.description)
  }, [item.description, setDescription])

  if (!showComplete && item.completed_at) return null

  return (
    <ListItem completed={item.completed_at}>
      { !item.completed_at
        ? <CompleteBtn
            type="radio"
            onClick={() => handleComplete(item)}
          ></CompleteBtn>
        : null
      }
      <ItemDisplay onClick={() => getTodo(item)}>{description}</ItemDisplay>
      <DeleteBtn onClick={() => handleDelete(item)}>&times;</DeleteBtn>
    </ListItem>
  )
}

Item.propTypes = {
  item: PropTypes.any
}

export default Item
