import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ListButton from './ListButton'

const ListItem = styled.li`
  display: flex;
`
const TodoLists = (props) => {
  const { setListId, todoLists } = props
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

TodoLists.propTypes = {
  setListId: PropTypes.func,
  todoLists: PropTypes.array
}

export default TodoLists
