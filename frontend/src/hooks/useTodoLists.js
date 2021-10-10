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

  const updateList = (list, description) => {
    fromApi.updateList(list, description).then((resp) => {
      const updatedList = resp.data
      const lists = todoLists.map((list) => {
        if (Number(list.id) === Number(updatedList.id)) {
          return updatedList
        } else {
          return list
        }
      })
      setTodoLists(lists)
    })
  }

  return { todoLists, createList, updateList }
}

export default useTodoLists
