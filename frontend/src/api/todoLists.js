import axios from 'axios'
import './interceptor'

export function todoLists () {
  return axios.get('/v1/todo_lists')
}

export function createList (description) {
  return axios.post('/v1/todo_lists', {
    todo_list: {
      description
    }
  })
}

export function updateList (list, description) {
  return axios.put(`/v1/todo_lists/${list.id}`, { todo_list: { description } })
}
