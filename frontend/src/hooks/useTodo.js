import { useState, useContext } from 'react'
import * as fromApi from '../api/todoList'
import { TodoListsContext } from '../TodoListsProvider'

const useTodo = () => {
  const [todo, setTodo] = useState({})
  const { listId } = useContext(TodoListsContext)

  const getTodo = (item) => {
    fromApi.todo(listId, item.id).then((resp) => {
      setTodo(resp.data)
    })
  }

  return { todo, getTodo }
}

export default useTodo
