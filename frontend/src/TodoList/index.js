import React from 'react'
import Item from './Item'
import PropTypes from 'prop-types'

const TodoList = (props) => {
  const { listItems, handleComplete, setListItem, showComplete } = props

  return (
    <>
      {listItems.map((item, i) => {
        return (<Item
                  key={i}
                  item={item}
                  handleComplete={handleComplete}
                  setListItem={setListItem}
                  showComplete={showComplete}
                />)
      })}
    </>
  )
}

TodoList.propTypes = {
  listItems: PropTypes.array,
  handleComplete: PropTypes.func,
  setListItem: PropTypes.func,
  showComplete: PropTypes.bool
}

export default TodoList
