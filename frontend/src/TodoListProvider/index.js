import React, { createContext, useState } from 'react'
import useTodos from '../hooks/useTodos'
import PropTypes from 'prop-types'

export const TodoListContext = createContext()

const TodoListProvider = ({ children }) => {
  const [todo, setTodo] = useState({})
  const [showComplete, setShowComplete] = useState(false)

  const {
    todos,
    handleComplete,
    handleCreate,
    handleDelete
  } = useTodos()

  return (
    <TodoListContext.Provider
      value={{
        todo,
        todos,
        handleComplete,
        handleCreate,
        handleDelete,
        showComplete,
        setShowComplete,
        setTodo
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
