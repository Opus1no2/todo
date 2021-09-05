import { useState } from 'react'
import * as fromApi from '../api/todoList'

const useTodo = () => {
  const [todo, setTodo] = useState({})

  const getTodo = (listId, itemId) => {
    fromApi.todo(listId, itemId).then((resp) => {
      setTodo(resp.data)
    })
  }

  return { todo, getTodo }
}

export default useTodo
