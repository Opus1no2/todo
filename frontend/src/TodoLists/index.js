import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import ListButton from './ListButton'
import { TodoListsContext } from '../TodoListsProvider'

const ListItem = styled.li`
  display: flex;
`
const TodoLists = () => {
  const { setListId, todoLists } = useContext(TodoListsContext)
  const [selectedList, setSelectedList] = useState(null)

  useEffect(() => {
    setListId(selectedList)
  }, [setListId, selectedList])

  useEffect(() => {
    if (!todoLists.length) return

    setSelectedList(todoLists[0].id)
  }, [setSelectedList, todoLists])

  return (
    <>
      {todoLists.map((list, i) => {
        return (
          <ListItem key={i}>
            <ListButton
              selectedList={selectedList === list.id}
              setSelectedList={setSelectedList}
              setListId={setListId}
              list={list}
            />
          </ListItem>
        )
      })}
    </>
  )
}

export default TodoLists
