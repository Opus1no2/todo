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
  const {
    todos,
    setListId,
    showComplete,
    setShowComplete
  } = useContext(TodoListContext)

  const complete = listComplete(todos)

  useEffect(() => {
    setListId(listId)
  }, [listId, setListId])

  useEffect(() => {
    if (complete) setShowComplete(true)
  }, [complete, setShowComplete])

  if (todos.length === 0) {
    return <EmptyState>Create a new Todo...</EmptyState>
  }

  if (complete && !showComplete) {
    return <EmptyState>List complete! Create some new todos...</EmptyState>
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
