import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ListItem = styled.li`
  display: flex;
`

const ListBtn = styled.button`
  display: flex;
  flex: 1;

  border: none;
  background: ${props => props.selected ? '#d4edff' : 'white'};
  border-bottom: solid 1px #b9dfff;
  border-right: solid 1px #b9dfff;
  color: #101010;
  padding: 1rem;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background: #dff0ff;
  }
`

const ListButton = (props) => {
  const {
    list,
    selectedList,
    setSelectedList,
    setListId
  } = props

  const handleClick = () => {
    setSelectedList(list.id)
    setListId(list.id)
  }

  return (
    <ListBtn
      selected={selectedList}
      onClick={handleClick}
    >
      {list.description}
    </ListBtn>
  )
}

ListButton.propTypes = {
  list: PropTypes.array,
  selectedList: PropTypes.array,
  setSelectedList: PropTypes.func,
  setListId: PropTypes.func
}

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
