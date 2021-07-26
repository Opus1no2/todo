import React from 'react'
import Item from './Item'
import PropTypes from 'prop-types'

const TodoList = (props) => {
  const { listId, listItems, handleComplete, setListItem, showComplete } = props

  return (
    <>
      {listItems.map((item, i) => {
        return (<Item
                  key={i}
                  item={item}
                  listId={listId}
                  handleComplete={handleComplete}
                  setListItem={setListItem}
                  showComplete={showComplete}
                />)
      })}
    </>
  )
}

TodoList.propTypes = {
  listId: PropTypes.number,
  listItems: PropTypes.array,
  handleComplete: PropTypes.func,
  setListItem: PropTypes.func,
  showComplete: PropTypes.bool
}

export default TodoList
