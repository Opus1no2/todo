import axios from "axios";
import './interceptor';

export function todoList(listId) {
  return axios.get(`/v1/todo_lists/${listId}/items`);
}