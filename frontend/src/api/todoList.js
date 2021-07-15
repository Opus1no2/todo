import axios from "axios";
import './interceptor';

export function todoList(listId) {
  return axios.get(`/v1/todo_lists/${listId}/items`);
}

export function updateListItem(itemId, listId, description) {
  return axios.put(`/v1/todo_lists/${listId}/items/${itemId}`, {
    description: description,
  })
}