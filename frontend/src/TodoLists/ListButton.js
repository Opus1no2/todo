import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, useRouteMatch } from 'react-router-dom'

const ListBtn = styled(Link)`
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
    selectedList
  } = props

  const { url } = useRouteMatch()

  return (
    <ListBtn
      selected={selectedList}
      to={`${url}/list/${list.id}`}
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
