import axios from 'axios'
import './interceptor'

export function todoList (listId) {
  return axios.get(`/v1/todo_lists/${listId}/items`)
}

export function updateListItem (listId, itemId, data) {
  return axios.put(`/v1/todo_lists/${listId}/items/${itemId}`, data)
}

export function createListItem (listId, description) {
  return axios.post(`/v1/todo_lists/${listId}/items`, { description })
}

export function destroyItem (listId, itemId) {
  return axios.delete(`/v1/todo_lists/${listId}/items/${itemId}`)
}

export function todo (listId, itemId) {
  return axios.get(`/v1/todo_lists/${listId}/items/${itemId}`)
}
