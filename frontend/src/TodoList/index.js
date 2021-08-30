import React, { useContext, useEffect } from 'react'
import Item from './Item'
import { TodoListContext } from '../TodoListProvider'
import styled from 'styled-components'
import { useParams } from 'react-router'

const EmptyState = styled.div`
  color: white;
`

const listComplete = (todos) => {
  return todos.filter(todo => todo.completed_at).length === todos.length && todos.length > 0
}

const TodoList = () => {
  const { listId } = useParams()
  const { todos, setListId } = useContext(TodoListContext)

  useEffect(() => {
    setListId(listId)
  }, [listId, setListId])

  if (listComplete(todos)) {
    return <EmptyState>List complete! Create a new todo!</EmptyState>
  }

  if (todos.length === 0) {
    return <EmptyState>Create a new Todo...</EmptyState>
  }

  return (
    <>
      {todos.map((item, i) => {
        return <Item key={i} item={item} />
      })}
    </>
  )
}

export default TodoList
