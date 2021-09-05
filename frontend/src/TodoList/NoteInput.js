import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import * as fromApi from '../api/todoList'
import { TodoListContext } from '../TodoListProvider'

const Cont = styled.div`
  display: flex;
  flex-direction: column;
`
const TxtArea = styled.textarea(
  ({ theme }) => `
    appearance: none;
    color: inherit;
    background: ${theme.darkBlue};
    border: solid 1px ${theme.borderBlue};
    margin-bottom: .5rem;
  `
)

const Btn = styled.button(
  ({ theme }) => `
    appearance: none;
    color: inherit;
    background: ${theme.darkBlue};
    border: solid 1px ${theme.borderBlue};
    padding: .5rem;

    &:hover {
      cursor: pointer;
      background: ${theme.lightBlue};
    }
  `
)

const NoteInput = (props) => {
  const { editing } = props

  const { listId } = useParams()
  const { todo } = useContext(TodoListContext)

  const [isEditing, setIsEditing] = useState(true)
  const [notes, setNotes] = useState('')

  useEffect(() => {
    setIsEditing(editing)
  }, [editing])

  useEffect(() => {
    setNotes(todo.notes || '')
  }, [todo])

  const handleSave = () => {
    fromApi.updateListItem(todo.id, listId, { notes }).then((resp) => {
      setNotes(resp.data.notes)
      setIsEditing(!isEditing)
    })
  }

  return (
    <Cont>
      {isEditing
        ? <>
          <TxtArea rows='10' onChange={(e) => setNotes(e.target.value)} value={notes} />
          <Btn onClick={handleSave}>save</Btn>
          </>
        : <div>{notes}</div>
      }
    </Cont>
  )
}

NoteInput.propTypes = {
  editing: PropTypes.bool,
  listItem: PropTypes.object
}

export default NoteInput
