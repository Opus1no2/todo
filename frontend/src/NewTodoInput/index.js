import React, { useContext } from 'react'
import styled from 'styled-components'
import { TodoListContext } from '../TodoListProvider'
import TextInput from '../ui/TextInput'

const ItemInput = styled(TextInput)`
  border: solid 1px ${props => props.theme.borderBlue};
  color: ${props => props.theme.fontWhite};
  background: ${props => props.theme.darkBlue}
`

const NewTodoInput = () => {
  const { handleCreate } = useContext(TodoListContext)

  return <ItemInput onKeyPress={handleCreate} placeholder="new item" />
}

export default NewTodoInput
