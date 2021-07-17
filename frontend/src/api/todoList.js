import axios from 'axios'
import './interceptor'

export function todoList (listId) {
  return axios.get(`/v1/todo_lists/${listId}/items`)
}

export function updateListItem (itemId, listId, data) {
  return axios.put(`/v1/todo_lists/${listId}/items/${itemId}`, data)
}

export function createListItem (listId, description) {
  return axios.post(`/v1/todo_lists/${listId}/items`, {
    todo_list_item: {
      description: description
    }
  })
}
