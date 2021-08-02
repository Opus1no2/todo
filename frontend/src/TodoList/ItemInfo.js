import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NoteInput from './NoteInput'

const ItemCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
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

const NoteLi = styled(ListVal)`
  display: flex;
  justify-content: space-between;

  button {
    appearance: none;
    border: 0;
    background: ${props => props.theme.darkBlue};
    color: ${props => props.theme.fontEdit};
    text-decoration: underline;

    &:hover {
      cursor: pointer;
    }
  }
`

const ItemInfo = (props) => {
  const { listItem, listId } = props
  const [editing, setEditing] = useState(false)

  return (
    <ItemCont>
      <InfoList>
        <ListVal><ListAttr>name:</ListAttr> {listItem.description}</ListVal>
        <ListVal><ListAttr>created:</ListAttr> {listItem.created_at}</ListVal>
        <ListVal><ListAttr>due date:</ListAttr> {listItem.due_at || 'none'}</ListVal>
        <NoteLi>
          <div>
            <ListAttr>Notes:</ListAttr>
          </div>
          <button onClick={() => setEditing(!editing)}>edit</button>
        </NoteLi>
        <li>
          <NoteInput editing={editing} listItem={listItem} listId={listId} />
        </li>
      </InfoList>
    </ItemCont>
  )
}

ItemInfo.propTypes = {
  listId: PropTypes.number,
  listItem: PropTypes.object
}

export default ItemInfo
