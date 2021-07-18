import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ItemCont = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  background: #f0f6ff;
  border-left: solid 1px #b9dfff;
  padding: 1rem;
`

const ItemInfo = (props) => {
  const { listItem } = props

  return (
    <ItemCont>{listItem.description}</ItemCont>
  )
}

ItemInfo.propTypes = {
  listItem: PropTypes.object
}

export default ItemInfo
