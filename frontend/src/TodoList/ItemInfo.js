import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ItemCont = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  background: ${props => props.theme.darkBlue};
  padding: 1rem;
  color: ${props => props.theme.fontWhite};
`

const InfoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const ListAttr = styled.span`
  font-weight: 400;
  color: ${props => props.theme.green};
`
const ListVal = styled.li`
  font-weight: 300;
  margin-bottom: .5rem;
  border-bottom: solid 1px ${props => props.theme.borderBlue};
  line-height: 2rem;
`

const ItemInfo = (props) => {
  const { listItem } = props

  return (
    <ItemCont>
      <InfoList>
        <ListVal><ListAttr>name:</ListAttr> {listItem.description}</ListVal>
        <ListVal><ListAttr>created:</ListAttr> {listItem.created_at}</ListVal>
        <ListVal><ListAttr>due date:</ListAttr> {listItem.due_at || 'none'}</ListVal>
      </InfoList>
    </ItemCont>
  )
}

ItemInfo.propTypes = {
  listItem: PropTypes.object
}

export default ItemInfo
