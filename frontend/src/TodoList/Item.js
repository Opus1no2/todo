import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import * as fromApi from '../api/todoList'
import TextInput from '../ui/TextInput'
import PropTypes from 'prop-types'

const ItemDisplay = styled.div`
  padding: .5rem;
  flex: 1;
`

const ListItem = styled.div`
  display: ${props => props.completed ? 'none' : 'flex'};
  align-items: center;
  border-bottom: solid 1px #d0e3ff;
`

const ListItemInput = styled(TextInput)`
  border-bottom: none;
`

const Item = (props) => {
  const { item, listId, selected, setSelected, handleComplete } = props
  const [description, setDescription] = useState(item.description)

  useEffect(() => {
    setDescription(item.description)
  }, [item.description, setDescription])

  const handleKeyPress = (e) => {
    const newDescription = e.target.value

    if (e.key === 'Enter' && newDescription.length && newDescription !== description) {
      setSelected(null)

      fromApi.updateListItem(item.id, listId, { description: newDescription }).then((resp) => {
        setDescription(resp.data.description)
      })
    }
  }

  const handleBlur = (e) => {
    setSelected(null)

    const newDescription = e.target.value

    if (newDescription.length && newDescription !== description) {
      fromApi.updateListItem(item.id, listId, { description: newDescription }).then((resp) => {
        setDescription(resp.data.description)
      })
    }
  }

  return (
    <ListItem completed={item.completed_at}>
      <input type="radio" onChange={handleComplete} value={item.id} />
      {selected
        ? <ListItemInput
          type="text"
          autoFocus
          onKeyPress={handleKeyPress}
          onBlur={handleBlur}
          placeholder={description}
        />
        : <ItemDisplay onClick={() => setSelected(item.id)}>{description}</ItemDisplay>}
    </ListItem>
  )
}

Item.propTypes = {
  item: PropTypes.any,
  listId: PropTypes.number,
  selected: PropTypes.bool,
  setSelected: PropTypes.func,
  handleComplete: PropTypes.func
}

export default Item
