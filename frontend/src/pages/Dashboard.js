import React from 'react'
import styled from 'styled-components'
import TodoLists from '../TodoLists'
import Header from '../Header'
import TodoList from '../TodoList'
import ItemInfo from '../TodoList/ItemInfo'
import NewListInput from '../NewListInput'
import ShowCompleteFilter from '../ShowCompleteFilter'
import NewTodoInput from '../NewTodoInput'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

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

const ItemInputCont = styled.div`
  position: sticky;
  display: flex;
  bottom: 0;
  width: inherit;
  padding-top: 1rem;
  padding-bottom: 2rem;
  background: ${props => props.theme.mediumBlue};
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

const AlignRight = styled(Row)`
  justify-content: flex-end;
  margin-bottom: .5rem;
`

const Dashboard = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}/list/:listId`}>
        <DashboardCont>
          <Row>
            <Header />
          </Row>
          <Cont>
            <ListNav>
              <NavList>
                <TodoLists />
                <NewListInput />
              </NavList>
            </ListNav>
            <ListCont>
              <div>
                <AlignRight>
                  <ShowCompleteFilter />
                </AlignRight>
                <TodoList />
              </div>
              <ItemInputCont>
                <NewTodoInput />
              </ItemInputCont>
            </ListCont>
            <ItemInfo />
          </Cont>
        </DashboardCont>
      </Route>
    </Switch>
  )
}

export default Dashboard
