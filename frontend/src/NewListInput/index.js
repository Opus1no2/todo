import React, { useContext } from 'react'
import styled from 'styled-components'
import TextInput from '../ui/TextInput'
import { TodoListsContext } from '../TodoListsProvider'

const ListInput = styled(TextInput)(
  ({ theme }) => `
    color: white;
    background: ${theme.darkBlue};
    width: 100%;
    padding: 1rem;
    border: none;
    border-bottom: solid 1px ${theme.borderBlue};
  `
)

const NewListInput = () => {
  const { createList } = useContext(TodoListsContext)
  return <ListInput onKeyPress={createList} placeholder="NEW LIST" />
}

export default NewListInput
