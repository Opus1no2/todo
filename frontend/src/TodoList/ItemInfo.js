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

const InfoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ItemInfo = (props) => {
  const { listItem } = props
  console.log(listItem)
  return (
    <ItemCont>
      <InfoList>
        <li><strong>name:</strong> {listItem.description}</li>
        <li><strong>created:</strong> {listItem.created_at}</li>
        <li><strong>due date:</strong> {listItem.due_at || 'none'}</li>
      </InfoList>
    </ItemCont>
  )
}

ItemInfo.propTypes = {
  listItem: PropTypes.object
}

export default ItemInfo
