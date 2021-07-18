import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ItemDisplay = styled.div`
  padding: .5rem;
  flex: 1;
`
const ListItem = styled.div`
  display: ${props => props.completed ? 'none' : 'flex'};
  align-items: center;
  border-bottom: solid 1px #d0e3ff;

  &:hover {
    cursor: pointer;
    background: #f4f9ff;
  }
`

const Item = (props) => {
  const { item, handleComplete, setListItem } = props
  const [description, setDescription] = useState(item.description)

  useEffect(() => {
    setDescription(item.description)
  }, [item.description, setDescription])

  return (
    <ListItem completed={item.completed_at}>
      <input type="radio" onChange={handleComplete} value={item.id} />
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
  setListItem: PropTypes.func
}

export default Item
