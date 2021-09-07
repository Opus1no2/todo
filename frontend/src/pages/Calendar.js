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
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.fontWhite};
  flex: 1 1 0%;
  padding: .5rem;
  background: ${props => props.inMonth ? '#002a33' : props.theme.mediumBlue};
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
  background: #002a33;
  justify-content: center;
  align-items: center;
`

const days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat']

const daysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate()
}

const Calendar = () => {
  const grid = []
  const rows = 5
  const daysInWeek = 7
  const date = new Date(Date.now())
  const cellCount = Array(daysInWeek * rows).fill(null)

  // 31
  const daysInThisMonth = daysInMonth(date.getFullYear(), date.getMonth() + 1)
  // 31
  const daysInPrevMonth = daysInMonth(date.getFullYear(), date.getMonth())

  // spaces in the grid that need to be filled with prev/next month values
  const remainderDays = cellCount.length - daysInThisMonth

  // days to show from previous month
  const previousMonthDays = Math.ceil(remainderDays / 2)

  // ex: 29, 30, 31
  const lastMonthDays = daysInPrevMonth - previousMonthDays

  // ex: [29, 30, 31]
  const lastMonthDaysRay = []
  for (let i = lastMonthDays; i < daysInPrevMonth; i++) {
    lastMonthDaysRay.push({ day: i, current: false })
  }

  // ex: [1, 2, 3, 4,...,31]
  const daysInThisMonthRay = []
  for (let i = 0; i < daysInThisMonth; i++) {
    daysInThisMonthRay.push({ day: i + 1, current: true })
  }

  // days to show for next month
  const nextMonthDays = remainderDays - previousMonthDays

  // ex: [1, 2]
  const nextMonthDaysRay = []
  for (let i = 0; i < nextMonthDays; i++) {
    nextMonthDaysRay.push({ day: i + 1, current: false })
  }

  const allDaysRay = [...lastMonthDaysRay, ...daysInThisMonthRay, ...nextMonthDaysRay]

  let i, j
  for (i = 0, j = allDaysRay.length; i < j; i += daysInWeek) {
    grid.push(allDaysRay.slice(i, i + daysInWeek))
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
            return <Cell key={j} inMonth={cell.current}>{cell.day}</Cell>
          })}
        </Row>
      )
    })}
    </Container>
  )
}

export default Calendar
