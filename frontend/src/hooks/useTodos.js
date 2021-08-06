import { useState, useEffect, useContext } from 'react'
import * as fromApi from '../api/todoList'
import { TodoListsContext } from '../TodoListsProvider'

const useTodos = () => {
  const [todos, setTodos] = useState([])

  const { listId } = useContext(TodoListsContext)

  useEffect(() => {
    if (!listId) return

    fromApi.todoList(listId).then((resp) => {
      setTodos(resp.data)
    })
  }, [listId])

  const handleCreate = (e) => {
    const description = e.target.value

    if (e.key === 'Enter') {
      fromApi.createListItem(listId, description).then((resp) => {
        todos.unshift(resp.data)
        setTodos([...todos])
        e.target.value = null
      })
    }
  }

  const handleComplete = (item) => {
    const itemId = item.id
    const data = { completed_at: Date() }

    fromApi.updateListItem(itemId, listId, data).then((resp) => {
      const newList = todos.filter((item) => {
        return item.id !== resp.data.id
      })
      setTodos(newList.concat(resp.data))
    })
  }

  const handleDelete = (item) => {
    fromApi.destroyItem(listId, item.id).then((resp) => {
      const newList = todos.filter((item) => {
        return item.id !== resp.data.id
      })
      setTodos(newList)
    })
  }

  return { todos, handleCreate, handleComplete, handleDelete }
}

export default useTodos
