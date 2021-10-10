import React, { createContext } from 'react'
import useTodoLists from '../hooks/useTodoLists'
import PropTypes from 'prop-types'

export const TodoListsContext = createContext()

const TodoListsProvider = ({ children }) => {
  const { listId, todoLists, createList, updateList } = useTodoLists()

  return (
    <TodoListsContext.Provider value={{
      listId,
      todoLists,
      createList,
      updateList
    }}>
      {children}
    </TodoListsContext.Provider>
  )
}

TodoListsProvider.propTypes = {
  children: PropTypes.any
}

export default TodoListsProvider
