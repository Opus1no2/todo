import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonLink } from '../ui/ButtonLink'
import EditModal from './EditModal'

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

const Button = styled(ButtonLink)`
  color: ${props => props.theme.lightYellow};
`

const ListButton = (props) => {
  const {
    list,
    selectedList
  } = props

  const [open, setOpen] = useState(false)

  return (
    <ListBtn
      selected={selectedList}
      to={`/dashboard/list/${list.id}`}
    >
      {list.description}
      <Button onClick={() => setOpen(!open) }>edit</Button>
      {open ? <EditModal setOpen={setOpen} list={list}/> : null}
    </ListBtn>
  )
}

ListButton.propTypes = {
  list: PropTypes.object,
  selectedList: PropTypes.bool
}

export default ListButton
