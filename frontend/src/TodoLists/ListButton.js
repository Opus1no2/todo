import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
  list: PropTypes.object,
  selectedList: PropTypes.bool,
  setSelectedList: PropTypes.func,
  setListId: PropTypes.func
}

export default ListButton
