import React, { useContext } from 'react'
import styled from 'styled-components'
import ListButton from './ListButton'
import { TodoListsContext } from '../TodoListsProvider'
import { useParams } from 'react-router'

const EditBtn = styled.button`
  appearance: none;
  display: ${props => props.showEdit ? 'flex' : 'none'};
  border: 0;
  background: ${props => props.theme.mediumBlue};
  color: ${props => props.theme.fontEdit};
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`

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

    ${EditBtn} {
      display: flex;
    }
  }
`
const TodoLists = () => {
  const { listId } = useParams()
  const { todoLists } = useContext(TodoListsContext)

  return (
    <>
      {todoLists.map((list, i) => {
        return (
          <ListItem key={i}
            selectedList={list.id === Number(listId)}
          >
            <ListButton
              list={list}
            />
            <EditBtn>edit</EditBtn>
          </ListItem>
        )
      })}
    </>
  )
}

export default TodoLists
