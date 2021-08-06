import React, { useContext } from 'react'
import styled from 'styled-components'
import TodoLists from '../TodoLists'
import Header from '../Header'
import TodoList from '../TodoList'
import TextInput from '../ui/TextInput'
import ItemInfo from '../TodoList/ItemInfo'
import { TodoListContext } from '../TodoListProvider'
import { TodoListsContext } from '../TodoListsProvider'

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
  display: flex;
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
  const { createList } = useContext(TodoListsContext)
  const {
    handleCreate,
    showComplete,
    setShowComplete
  } = useContext(TodoListContext)

  return (
    <DashboardCont>
      <Row>
        <Header />
      </Row>
      <Cont>
        <ListNav>
          <NavList>
            <TodoLists />
            <ListInput onKeyPress={createList} placeholder="NEW LIST" />
          </NavList>
        </ListNav>
          <ListCont>
            <div>
              <AlignRight>
                <PillBtn
                  onClick={() => setShowComplete(!showComplete)}
                  showComplete={showComplete}
                >
                  Show Complete
                </PillBtn>
              </AlignRight>
              <TodoList />
            </div>
            <ItemInputCont>
              <ItemInput onKeyPress={handleCreate} placeholder="new item" />
            </ItemInputCont>
          </ListCont>
        <ItemInfo/>
      </Cont>
    </DashboardCont>
  )
}

export default Dashboard
