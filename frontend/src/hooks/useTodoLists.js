import { useState, useEffect } from 'react'
import * as fromApi from '../api/todoLists'

const useTodoLists = () => {
  const [todoLists, setTodoLists] = useState([])

  useEffect(() => {
    fromApi.todoLists().then((resp) => {
      setTodoLists(resp.data)
    })
  }, [])

  const createList = (e) => {
    if (!e.target.value) return

    if (e.key === 'Enter') {
      fromApi.createList(e.target.value).then((resp) => {
        setTodoLists(todoLists.concat(resp.data))
        e.target.value = null
      })
    }
  }

  return { todoLists, createList }
}

export default useTodoLists
