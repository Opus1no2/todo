import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ListBtn = styled(Link)`
  appearance: none;
  background: transparent;
  display: flex;
  justify-content: space-between;
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
    selectedList
  } = props

  return (
    <ListBtn
      selected={selectedList}
      to={`/dashboard/list/${list.id}`}
    >
      {list.description}
    </ListBtn>
  )
}

ListButton.propTypes = {
  list: PropTypes.object,
  selectedList: PropTypes.bool
}

export default ListButton
