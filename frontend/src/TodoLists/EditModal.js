import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TextInput from '../ui/TextInput'
import { TodoListsContext } from '../TodoListsProvider'

const ModalCont = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  z-index: 10;
  padding: 1rem;
  background: white;
  width: 25vw;
  background: ${props => props.theme.lightBlue};
`

const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background: #00000075;
`

const Cont = styled.div`
  display: contents;
`

const Input = styled(TextInput)`
  border: solid 1px ${props => props.theme.fontWhite};
  margin-top: .5rem;
  margin-bottom: .5rem;
`

const Button = styled.button`
  padding: .5rem;
  text-transform: uppercase;
  background: #1b788d;
  border: solid 1px ${props => props.theme.fontWhite};
`

const EditModal = (props) => {
  const { list, setOpen } = props
  const [description, setDescription] = useState('')
  const { updateList } = useContext(TodoListsContext)

  const handleUpdate = (list, description) => {
    updateList(list, description)
    setOpen(false)
  }

  return (
    <Cont>
      <ModalBackDrop onClick={() => setOpen(false)} />
      <ModalCont>
        <label htmlFor="todo-description">List Name:</label>
        <Input id="todo-description" type="text" placeholder={list.description} onChange={(e) => setDescription(e.target.value)} />
        <Button onClick={() => handleUpdate(list, description)}>save</Button>
      </ModalCont>
    </Cont>
  )
}

EditModal.propTypes = {
  setOpen: PropTypes.func,
  list: PropTypes.object
}

export default EditModal
