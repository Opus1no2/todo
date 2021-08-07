import React, { useContext } from 'react'
import styled from 'styled-components'
import { TodoListContext } from '../TodoListProvider'

const PillBtn = styled.button`
  text-decoration: none;
  padding: .3rem;
  font-weight: 300;
  background: ${props => props.showComplete ? props.theme.lightBlue : 'transparent'};
  color: ${props => props.showComplete ? 'white' : props.theme.fontWhite};

  border: solid 1px;
  border-color: ${props => props.showComplete ? 'none' : '#d0d0d0'};
  border-radius: 1rem;

  &:hover {
    cursor: pointer;
    border-color: white;
  }
`

const ShowCompleteFilter = () => {
  const { showComplete, setShowComplete } = useContext(TodoListContext)

  return (
    <PillBtn
      onClick={() => setShowComplete(!showComplete)}
      showComplete={showComplete}
    >
      Show Complete
    </PillBtn>
  )
}

export default ShowCompleteFilter
