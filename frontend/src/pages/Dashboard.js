import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import TodoLists from '../TodoLists'
import Header from '../Header'
import TodoList from '../TodoList'
import ItemInfo from '../TodoList/ItemInfo'
import NewListInput from '../NewListInput'
import ShowCompleteFilter from '../ShowCompleteFilter'
import NewTodoInput from '../NewTodoInput'
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'
import { TodoListsContext } from '../TodoListsProvider'

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const DashboardCont = styled(Column)`
  height: 100vh;
`

const Row = styled.div`
  display: flex;
  flex: 1;
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

const ListsNav = styled.nav`
  display: none;
  width: 250px;
  background: ${props => props.theme.darkBlue};

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  @media(min-width: 1024px) {
    display: block;
  }
`

const AlignRight = styled(Row)`
  justify-content: flex-end;
  margin-bottom: .5rem;
`

const PostLoginRedirect = () => {
  const history = useHistory()
  const { path } = useRouteMatch()
  const { todoLists } = useContext(TodoListsContext)

  useEffect(() => {
    if (todoLists.length) {
      history.push(`${path}/list/${todoLists[0].id}`)
    }
  }, [todoLists, history, path])

  return null
}

const Dashboard = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path}>
        <PostLoginRedirect />
      </Route>
      <Route path={`${path}/list/:listId`}>
        <DashboardCont>
          <Header />
          <Row>
            <ListsNav>
              <TodoLists />
              <NewListInput />
            </ListsNav>
            <ListCont>
              <Column>
                <AlignRight>
                  <ShowCompleteFilter />
                </AlignRight>
                <TodoList />
              </Column>
              <ItemInputCont>
                <NewTodoInput />
              </ItemInputCont>
            </ListCont>
            <ItemInfo />
          </Row>
        </DashboardCont>
      </Route>
    </Switch>
  )
}

export default Dashboard
