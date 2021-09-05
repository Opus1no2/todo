import React, { useContext } from 'react'
import styled from 'styled-components'
import ListButton from './ListButton'
import { TodoListsContext } from '../TodoListsProvider'
import { useParams } from 'react-router'

const ListItem = styled.li`
  display: flex;
  align-items: center;
  flex: 1;

  border: none;
  background: ${props => props.selectedList ? props.theme.mediumBlue : 'inherit'};
  border-bottom: solid 1px ${props => props.theme.borderBlue};
  border-left: solid 2px;
  border-left-color: ${props => props.selected ? 'white' : props.theme.darkBlue};

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.mediumBlue};
    border-left: solid 2px white;
  }
`
const TodoLists = () => {
  const { listId } = useParams()
  const { todoLists } = useContext(TodoListsContext)

  return (
    <>
      {todoLists.map((list, i) => {
        return (
          <ListItem key={i} selectedList={list.id === Number(listId)}>
            <ListButton list={list} />
          </ListItem>
        )
      })}
    </>
  )
}

export default TodoLists
