import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ItemDisplay = styled.div`
  padding: .5rem;
  flex: 1;
`
const ListItem = styled.div`
  align-items: center;
  border-bottom: solid 1px ${props => props.theme.borderBlue};
  margin-bottom: .3rem;
  display: ${props => props.completed ? 'flex' : 'flex'};
  background: ${props => props.completed ? props.theme.deactivated : props.theme.mediumBlue};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  color: ${props => props.completed ? 'grey' : 'white'};

  &:hover {
    cursor: pointer;
    background: ${props => props.completed ? props.theme.deactivated : props.theme.lightBlue};
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

const Item = (props) => {
  const { item, handleComplete, setListItem, showComplete, handleDelete } = props
  const [description, setDescription] = useState(item.description)

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
      <DeleteBtn onClick={() => handleDelete(item)}>&times;</DeleteBtn>
    </ListItem>
  )
}

Item.propTypes = {
  item: PropTypes.any,
  selected: PropTypes.bool,
  setSelected: PropTypes.func,
  handleComplete: PropTypes.func,
  handleDelete: PropTypes.func,
  setListItem: PropTypes.func,
  showComplete: PropTypes.bool
}

export default Item
