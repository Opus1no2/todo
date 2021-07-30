import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import listContext from '../listContext'
import * as fromApi from '../api/todoList'

const ItemDisplay = styled.div`
  padding: .5rem;
  flex: 1;
`
const ListItem = styled.div`
  align-items: center;
  border-bottom: solid 1px #d0e3ff;
  margin-bottom: .3rem;
  display: ${props => props.completed ? 'flex' : 'flex'};
  background: ${props => props.completed ? '#f3f3f3' : 'white'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  color: ${props => props.completed ? 'grey' : 'none'};

  &:hover {
    cursor: pointer;
    background: ${props => props.completed ? '#d6d6d6' : '#f4f9ff'};
  }
`

const DeleteBtn = styled.button`
  border: none;
  background: transparent;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`

const Item = (props) => {
  const listId = useContext(listContext)
  const { item, handleComplete, setListItem, showComplete } = props
  const [description, setDescription] = useState(item.description)
  const handleDelete = () => {
    fromApi.destroyItem(listId, item.id).then((resp) => {
      console.log('resp', resp.data)
    })
  }

  useEffect(() => {
    setDescription(item.description)
  }, [item.description, setDescription])

  if (!showComplete && item.completed_at) return null

  return (
    <ListItem completed={item.completed_at}>
      { !item.completed_at
        ? <input
            type="radio"
            onChange={handleComplete}
            value={item.id} />
        : null
      }
      <ItemDisplay onClick={() => setListItem(item)}>{description}</ItemDisplay>
      <DeleteBtn onClick={handleDelete}>&times;</DeleteBtn>
    </ListItem>
  )
}

Item.propTypes = {
  item: PropTypes.any,
  selected: PropTypes.bool,
  setSelected: PropTypes.func,
  handleComplete: PropTypes.func,
  setListItem: PropTypes.func,
  showComplete: PropTypes.bool
}

export default Item
