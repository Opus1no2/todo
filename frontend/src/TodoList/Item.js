import React, { useContext, useEffect, useState } from 'react'
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

const Item = (props) => {
  const { item } = props
  const { listId } = useParams()

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
      <ItemDisplay onClick={() => getTodo(listId, item.id)}>{description}</ItemDisplay>
      <TrashIcon icon={faTrashAlt} onClick={() => handleDelete(item)} />
    </ListItem>
  )
}

Item.propTypes = {
  item: PropTypes.any
}

export default Item
