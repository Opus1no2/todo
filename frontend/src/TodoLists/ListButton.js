import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ListBtn = styled.button`
  appearance: none;
  background: transparent;
  display: flex;
  flex: 1;
  padding: 1rem;
  border: none;
  text-transform: uppercase;
  color: ${props => props.theme.green};

  &:hover {
    cursor: pointer;
  }
`

const ListButton = (props) => {
  const {
    list,
    selectedList,
    setListId
  } = props

  const handleClick = () => {
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
  setListId: PropTypes.func
}

export default ListButton
