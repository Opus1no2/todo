import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ListBtn = styled.button`
  display: flex;
  flex: 1;

  border: none;
  background: ${props => props.selected ? props.theme.mediumBlue : 'inherit'};
  color: ${props => props.theme.green};
  border-bottom: solid 1px ${props => props.theme.borderBlue};
  border-left: solid 2px;
  border-left-color: ${props => props.selected ? 'white' : props.theme.darkBlue};
  padding: 1rem;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.mediumBlue};
    border-left: solid 2px white;
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
