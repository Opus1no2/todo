import { useState, useEffect } from 'react'
import * as fromApi from '../api/todoLists'

const useTodoLists = () => {
  const [todoLists, setTodoLists] = useState([])
  const [listId, setListId] = useState()

  useEffect(() => {
    fromApi.todoLists().then((resp) => {
      setTodoLists(resp.data)
    })
  }, [])

  useEffect(() => {
    if (!todoLists.length) return

    setListId(todoLists[0].id)
  }, [todoLists])

  const createList = (e) => {
    if (!e.target.value) return

    if (e.key === 'Enter') {
      fromApi.createList(e.target.value).then((resp) => {
        setTodoLists(todoLists.concat(resp.data))
        e.target.value = null
      })
    }
  }

  return { todoLists, createList, listId, setListId }
}

export default useTodoLists
