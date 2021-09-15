import React, { createContext, useState } from 'react'
import useTodos from '../hooks/useTodos'
import PropTypes from 'prop-types'
import useTodo from '../hooks/useTodo'

export const TodoListContext = createContext()

const TodoListProvider = ({ children }) => {
  const [showComplete, setShowComplete] = useState(false)

  const {
    todos,
    handleUpdate,
    handleCreate,
    handleDelete,
    setListId
  } = useTodos()

  const { todo, getTodo } = useTodo()

  return (
    <TodoListContext.Provider
      value={{
        todo,
        todos,
        handleUpdate,
        handleCreate,
        handleDelete,
        showComplete,
        setShowComplete,
        getTodo,
        setListId
      }}
    >
      {children}
    </TodoListContext.Provider>
  )
}

TodoListProvider.propTypes = {
  children: PropTypes.any
}

export default TodoListProvider
