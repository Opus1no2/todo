import React from 'react'
import Item from './Item'
import PropTypes from 'prop-types'

const TodoList = (props) => {
  const { listId, listItems, handleComplete, setListItem } = props

  return (
    <>
      {listItems.map((item, i) => {
        return (<Item
                  key={i}
                  item={item}
                  listId={listId}
                  handleComplete={handleComplete}
                  setListItem={setListItem}
                />)
      })}
    </>
  )
}

TodoList.propTypes = {
  listId: PropTypes.number,
  listItems: PropTypes.array,
  handleComplete: PropTypes.func,
  setListItem: PropTypes.func
}

export default TodoList
