import React, { createContext } from 'react'
import useTodoLists from '../hooks/useTodoLists'
import PropTypes from 'prop-types'

export const TodoListsContext = createContext()

const TodoListsProvider = ({ children }) => {
  const { listId, setListId, todoLists, createList } = useTodoLists()

  return (
    <TodoListsContext.Provider value={{
      listId,
      setListId,
      todoLists,
      createList
    }}>
      {children}
    </TodoListsContext.Provider>
  )
}

TodoListsProvider.propTypes = {
  children: PropTypes.any
}

export default TodoListsProvider