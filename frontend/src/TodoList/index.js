import React, { useContext } from 'react'
import Item from './Item'
import { TodoListContext } from '../TodoListProvider'

const TodoList = () => {
  const { todos } = useContext(TodoListContext)

  return (
    <>
      {todos.map((item, i) => {
        return <Item key={i} item={item} />
      })}
    </>
  )
}

export default TodoList
