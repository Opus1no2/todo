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
  border: solid 1px ${props => props.theme.borderBlue};
  color: ${props => props.theme.fontWhite};
  background: ${props => props.theme.darkBlue}
`

const ItemInputCont = styled.div`
  position: sticky;
  bottom: 0;
  width: inherit;
  padding-top: 1rem;
  padding-bottom: 2rem;
  background: ${props => props.theme.mediumBlue};
`

const ListInput = styled(TextInput)`
  color: white;
  background: ${props => props.theme.darkBlue};
  width: 100%;
  padding: 1rem;
  border: none;
  border-bottom: solid 1px ${props => props.theme.borderBlue};
`

const ListNav = styled.nav`
  width: 250px;
  background: ${props => props.theme.darkBlue};
`

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const PillBtn = styled.button`
  text-decoration: none;
  padding: .3rem;
  font-weight: 300;
  background: ${props => props.showComplete ? props.theme.lightBlue : 'transparent'};
  color: ${props => props.showComplete ? 'white' : props.theme.fontWhite};

  border: solid 1px;
  border-color: ${props => props.showComplete ? 'none' : '#d0d0d0'};
  border-radius: 1rem;

  &:hover {
    cursor: pointer;
    border-color: white;
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

  const handleComplete = (item) => {
    const itemId = item.id
    const data = { completed_at: Date() }

    fromTodoList.updateListItem(itemId, listId, data).then((resp) => {
      const newList = listItems.filter((item) => {
        return item.id !== resp.data.id
      })
      setListItems(newList.concat(resp.data))
    })
  }

  const handleDelete = (item) => {
    fromTodoList.destroyItem(listId, item.id).then((resp) => {
      const newList = listItems.filter((item) => {
        return item.id !== resp.data.id
      })
      setListItems(newList)
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
                <PillBtn
                  onClick={handleShowComplete}
                  showComplete={showComplete}
                >
                  Show Complete
                </PillBtn>
              </AlignRight>
              {listItems.length
                ? <TodoList
                    listItems={listItems}
                    handleComplete={handleComplete}
                    handleDelete={handleDelete}
                    setListItem={setListItem}
                    showComplete={showComplete} />
                : null
              }
            </div>
            <ItemInputCont>
              <ItemInput onKeyPress={handleCreate} placeholder="new item" />
            </ItemInputCont>
          </ListCont>
        <ItemInfo listItem={listItem} listId={listId} />
      </Cont>
    </DashboardCont>
  )
}

export default Dashboard
