import axios from 'axios';
import './interceptor';

export function todoLists() {
  return axios.get("/v1/todo_lists");
}