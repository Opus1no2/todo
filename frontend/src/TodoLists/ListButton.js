import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const EditBtn = styled(FontAwesomeIcon)`
  background: ${props => props.theme.mediumBlue};
  color: ${props => props.theme.fontEdit};

  &:hover {
    cursor: pointer;
  }
`
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

  const editList = () => {
    console.log('edit')
  }

  return (
    <ListBtn
      selected={selectedList}
      to={`/dashboard/list/${list.id}`}
    >
      {list.description}
      <EditBtn icon={faEdit} onClick={editList}/>
    </ListBtn>
  )
}

ListButton.propTypes = {
  list: PropTypes.object,
  selectedList: PropTypes.bool
}

export default ListButton
