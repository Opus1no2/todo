import React, { useState } from 'react'
import Item from './Item'
import PropTypes from 'prop-types'

const TodoList = (props) => {
  const { listId, listItems, handleComplete } = props
  const [selected, setSelected] = useState(false)

  return (
    <>
      {listItems.map((item, i) => {
        return (<Item
                  key={i}
                  item={item}
                  listId={listId}
                  selected={selected === item.id}
                  setSelected={setSelected}
                  handleComplete={handleComplete}
                />)
      })}

    </>
  )
}

TodoList.propTypes = {
  listId: PropTypes.number,
  listItems: PropTypes.array,
  handleComplete: PropTypes.func
}

export default TodoList
