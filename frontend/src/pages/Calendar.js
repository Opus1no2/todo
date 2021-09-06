import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  width: 80vw;
  margin: 0 auto;
  background: #002a33;
  border-left: solid 1px ${props => props.theme.borderBlue};
`

const Row = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 0%;
  border-bottom: solid 1px ${props => props.theme.borderBlue};
`

const Cell = styled.div`
  flex: 1 1 0%;
  border-right: solid 1px ${props => props.theme.borderBlue};
`

const DayHeader = styled.div`
  height: 2rem;
  display: flex;
  border-bottom: solid 1px ${props => props.theme.borderBlue};
  color: ${props => props.theme.fontWhite};
  background: ${props => props.theme.mediumBlue};
`

const DayCell = styled(Cell)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat']

const Calendar = () => {
  const grid = []
  const row = Array(7).fill(null)
  const rows = 5

  for (let i = 0; i < rows; i++) {
    grid.push([...row])
  }

  return (
    <Container>
    <DayHeader>
      {days.map((day, i) => {
        return <DayCell key={i}>{day}</DayCell>
      })}
    </DayHeader>
    {grid.map((row, i) => {
      return (
        <Row key={i}>
          {row.map((cell, j) => {
            return <Cell key={j}>{cell}</Cell>
          })}
        </Row>
      )
    })}
    </Container>
  )
}

export default Calendar
