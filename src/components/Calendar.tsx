import React, {useState} from 'react'

const displayMonths: string[] = [
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
const currentMonth = currentDate.getMonth()
const currentDateString = currentDate.toDateString()

let daysNumbers: number[] = []

for(let i = 1; i <= 31; i++) {
  daysNumbers.push(i)
}
// console.log('days', daysNumbers)


const Calendar = () => {

  return(<div className="calendarContainer">
    <div className="calendar">

      <div className="displayMonths">
        {displayMonths.map((month: string, idx: number) => {
          return(
          <div key={idx} id={month} className="month">
              {month}
          </div>
            )
        })}
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
