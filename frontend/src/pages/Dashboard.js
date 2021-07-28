import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import * as fromApi from '../api/todoLists'
import * as fromTodoList from '../api/todoList'

import TodoLists from '../TodoLists'
import Header from '../Header'
import TodoList from '../TodoList'
import TextInput from '../ui/TextInput'
import ItemInfo from '../TodoList/ItemInfo'

const DashboardCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;
`

const Cont = styled.div`
  display: flex;
  flex: 1;
`

const Row = styled.div`
  display: flex;
`

const ListCont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  flex: 1;
`

const ItemInput = styled(TextInput)`
  border: solid 1px #96c2f9;
`

const ItemInputCont = styled.div`
  background: white;
  position: sticky;
  bottom: 0;
  width: inherit;
  padding-top: 1rem;
  padding-bottom: 2rem;
`

const ListInput = styled(TextInput)`
  background: white;
  width: 100%;
  padding: 1rem;
  border-right: solid 1px #b9dfff;
  border-bottom: solid 1px #b9dfff;
`

const ListNav = styled.nav`
  width: 250px;
  background: #f0f6ff;
`

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const PillBtn = styled.button`
  background: white;
  border: solid 1px;
  text-decoration: none;
  padding: .3rem;
  border-radius: 1rem;
  font-weight: 300;
  background: ${props => props.showComplete ? '#616161' : 'white'};
  color: ${props => props.showComplete ? 'white' : 'black'};
  border-color: ${props => props.showComplete ? 'none' : '#d0d0d0'};

  &:hover {
    cursor: pointer;
  }
`

const AlignRight = styled(Row)`
  justify-content: flex-end;
  margin-bottom: .5rem;
`

const Dashboard = () => {
  const [listId, setListId] = useState()
  const [todoLists, setTodoLists] = useState([])
  const [listItems, setListItems] = useState([])
  const [listItem, setListItem] = useState({})
  const [showComplete, setShowComplete] = useState(false)

  useEffect(() => {
    fromApi.todoLists().then((resp) => {
      setTodoLists(resp.data)
    })
  }, [])

  useEffect(() => {
    if (!listId) return

    fromTodoList.todoList(listId).then((resp) => {
      setListItems(resp.data)
    })
  }, [listId])

  const handleCreate = (e) => {
    const description = e.target.value

    if (e.key === 'Enter') {
      fromTodoList.createListItem(listId, description).then((resp) => {
        listItems.unshift(resp.data)
        setListItems([...listItems])
        e.target.value = null
      })
    }
  }

  const handleComplete = (e) => {
    fromTodoList.updateListItem(e.target.value, listId, { completed_at: Date() }).then((resp) => {
      const newList = listItems.filter((item) => {
        return item.id !== resp.data.id
      })
      setListItems(newList.concat(resp.data))
    })
  }

  const createList = (e) => {
    if (!e.target.value) return

    if (e.key === 'Enter') {
      fromApi.createList(e.target.value).then((resp) => {
        setTodoLists(todoLists.concat(resp.data))
        e.target.value = null
      })
    }
  }

  const handleShowComplete = () => {
    setShowComplete(!showComplete)
  }

  return (
    <DashboardCont>
      <Row>
        <Header />
      </Row>
      <Cont>
        <ListNav>
          <NavList>
            {todoLists.length
              ? <TodoLists
              todoLists={todoLists}
              setListId={setListId} />
              : null
            }
            <ListInput onKeyPress={createList} placeholder="NEW LIST" />
          </NavList>
        </ListNav>
        <ListCont>
          <div>
            <AlignRight>
              <PillBtn onClick={handleShowComplete} showComplete={showComplete}>Show Complete</PillBtn>
            </AlignRight>
            {listItems.length
              ? <TodoList
              listId={listId}
              listItems={listItems}
              handleComplete={handleComplete}
              setListItem={setListItem}
              showComplete={showComplete} />
              : null
            }
          </div>
          <ItemInputCont>
            <ItemInput onKeyPress={handleCreate} placeholder="new item" />
          </ItemInputCont>
        </ListCont>
        <ItemInfo listItem={listItem} />
      </Cont>
    </DashboardCont>
  )
}

export default Dashboard
