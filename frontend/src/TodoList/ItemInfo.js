import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NoteInput from './NoteInput'
import * as fromTodoList from '../api/todoList'

const ItemCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
  background: ${props => props.theme.darkBlue};
  padding: 1rem;
  color: ${props => props.theme.fontWhite};
`

const InfoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const ListAttr = styled.span`
  font-weight: 400;
  color: ${props => props.theme.green};
`
const ListVal = styled.li`
  font-weight: 300;
  margin-bottom: .5rem;
  border-bottom: solid 1px ${props => props.theme.borderBlue};
  line-height: 2rem;
`

const NoteLi = styled(ListVal)`
  display: flex;
  justify-content: space-between;
`

const EditBtn = styled.button(
  ({ theme }) => `
    appearance: none;
    border: 0;
    background: ${theme.darkBlue};
    color: ${theme.fontEdit};
    text-decoration: underline;

    &:hover {
      cursor: pointer;
    }
  `
)
const DateInput = styled.input(
  ({ theme }) => `
    appearance: none;
    border: solid 1px ${theme.borderBlue};
    background: transparent;
    color: ${theme.fontWhite};
    padding-left: 5px;

    &::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  `
)

const ItemInfo = (props) => {
  const { listItem, listId } = props
  const [editing, setEditing] = useState(false)
  const [editDueDate, setEditDueDate] = useState(false)
  const [dueDate, setDueDate] = useState()

  useEffect(() => {
    setDueDate(listItem.due_date)
  }, [listItem.due_date])

  const formatDate = (date) => {
    if (!date) return
    return new Date(date).toLocaleDateString()
  }

  const handleDueDate = (date) => {
    fromTodoList.updateListItem(listItem.id, listId, { due_date: date }).then((resp) => {
      setDueDate(resp.data.due_date)
      setEditDueDate(false)
    })
  }

  return (
    <ItemCont>
      <InfoList>
        <ListVal><ListAttr>name:</ListAttr> {listItem.description}</ListVal>
        <ListVal><ListAttr>created:</ListAttr> {formatDate(listItem.created_at)}</ListVal>
        {dueDate && !editDueDate
          ? <NoteLi>
              <div><ListAttr>due date:</ListAttr> {formatDate(dueDate) || 'none'}</div>
              <EditBtn onClick={() => setEditDueDate(!editDueDate)}>edit</EditBtn>
            </NoteLi>
          : <ListVal><ListAttr>due date:</ListAttr> <DateInput type='date' onChange={(e) => handleDueDate(e.target.value)} /></ListVal>
        }
        <NoteLi>
          <div>
            <ListAttr>Notes:</ListAttr>
          </div>
          <EditBtn onClick={() => setEditing(!editing)}>edit</EditBtn>
        </NoteLi>
        <li>
          <NoteInput editing={editing} listItem={listItem} listId={listId} />
        </li>
      </InfoList>
    </ItemCont>
  )
}

ItemInfo.propTypes = {
  listId: PropTypes.number,
  listItem: PropTypes.object
}

export default ItemInfo
