import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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

const Item = (props) => {
  const { item, handleComplete, setListItem, showComplete } = props
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
    </ListItem>
  )
}

Item.propTypes = {
  item: PropTypes.any,
  listId: PropTypes.number,
  selected: PropTypes.bool,
  setSelected: PropTypes.func,
  handleComplete: PropTypes.func,
  setListItem: PropTypes.func,
  showComplete: PropTypes.bool
}

export default Item
