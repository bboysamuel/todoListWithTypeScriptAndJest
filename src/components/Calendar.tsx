import React, {useState} from 'react'

const displayMonthsArray: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const displayDayNames: string[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const currentDate = new Date()
const currentMonthNumber = currentDate.getMonth()
const currentMonthDisplay = displayMonthsArray[currentMonthNumber]
// console.log('currentMonth', currentMonth)
const currentDateDisplay= currentDate.toDateString()


const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate() // 0 gets the last day of the previous month. so add 1 month so it's current month.

let daysNumbers: number[] = []

for(let i = 1; i <= lastDayOfMonth; i++) {
  daysNumbers.push(i)
}
// console.log('days', daysNumbers)

const handleMonthNavClick = (e: React.MouseEvent): void => {
    console.log('clicked')
    // set month state to state + 1. if prev set state to state -1
}


const Calendar = () => {

  return(<div className="calendarContainer">
    <div className="calendar">

      <div className="displayMonths">
        <div className="month">
          <h2 onClick={handleMonthNavClick}
          className="prevMonthButton"> {'>'}</h2>
          <h1> {currentMonthDisplay}</h1>
          <p> {currentDateDisplay} </p>
          <h2 onClick={handleMonthNavClick}
          className="nextMonthButton"> {'>'} </h2>

        </div>
        {/* {displayMonthsArray.map((month: string, idx: number) => {
          return(
          <div key={idx} id={month} className="month">
              {month}
          </div>
            )
        })} */}
      </div>

      <div className="displayDayNames">
        {displayDayNames.map((dayName: string, idx: number) => {
          return(
          <div key={idx} id={dayName} className="dayName">
              {dayName}
          </div>
            )
        })}
      </div>

      <div className="displayDayNumbers">
        {daysNumbers.map((dayNumber: number, idx: number) => {
          return(
          <div key={idx} className="dayNumber">
              {dayNumber}
          </div>
            )
        })}
      </div>

    </div>

  </div>)
}

export default Calendar
