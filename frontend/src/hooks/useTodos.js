import { useState, useEffect } from 'react'
import * as fromApi from '../api/todoList'

const useTodos = () => {
  const [todos, setTodos] = useState([])
  const [listId, setListId] = useState()

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
      }).catch((err) => {
        console.log(err)
      })
    }
  }

  const handleComplete = (item) => {
    const itemId = item.id
    const data = { completed_at: Date() }

    fromApi.updateListItem(listId, itemId, data).then((resp) => {
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

  return { todos, setTodos, handleCreate, handleComplete, handleDelete, setListId }
}

export default useTodos
