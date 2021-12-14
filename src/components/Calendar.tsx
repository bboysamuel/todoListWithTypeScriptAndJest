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
  'December',
]
const displayDayNames: string[] = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
]


const Calendar = (props: any) => {

  const {showCalendar, setShowCalendar, showCalendarOnClick} = props

  const [selectedDate, setSelectedDate] = useState()

  console.log('showCalendar', showCalendar)

  const currentDate = new Date()
const currentMonthNumber = currentDate.getMonth()
const [currentMonthDisplay, setCurrentMonthDisplay] = useState<string>(displayMonthsArray[currentMonthNumber])
// console.log('currentMonth', currentMonth)
let currentDateDisplay = currentDate.toDateString()


const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate() // 0 gets the last day of the previous month. so add 1 month so it's current month.

let daysNumbers: number[] = []

for(let i = 1; i <= lastDayOfMonth; i++) {
  daysNumbers.push(i)
}
// console.log('days', daysNumbers)

const handlePreviousMonthNavClick = (e: React.MouseEvent): void => {
    const indexOfCurrentMonth = displayMonthsArray.indexOf(currentMonthDisplay)
    if(indexOfCurrentMonth === 0) {
      setCurrentMonthDisplay(displayMonthsArray[displayMonthsArray.length - 1])
    } else {
      setCurrentMonthDisplay(displayMonthsArray[indexOfCurrentMonth - 1])

    }

    // set month state to state + 1. if prev set state to state -1
}
const handleNextMonthNavClick = (e: React.MouseEvent): void => {
    const indexOfCurrentMonth = displayMonthsArray.indexOf(currentMonthDisplay)
    if(indexOfCurrentMonth === displayMonthsArray.length - 1) {
      setCurrentMonthDisplay(displayMonthsArray[0])
    } else {
      setCurrentMonthDisplay(displayMonthsArray[indexOfCurrentMonth + 1])

    }
    // set month state to state + 1. if prev set state to state -1
}


  return(<div className={showCalendar ? "calendarContainer show" : "calendarContainer hide"}>
    <div className="calendar">

      <div className="displayMonths">
      <h2
          onClick={handlePreviousMonthNavClick}
          className="monthNavButton prevMonthButton"> {'<'}</h2>
        <div className="month">
          <h1> {currentMonthDisplay}</h1>
          <p> {currentDateDisplay} </p>
        </div>
        {/* {displayMonthsArray.map((month: string, idx: number) => {
          return(
          <div key={idx} id={month} className="month">
              {month}
          </div>
            )
        })} */}
                  <h2 onClick={handleNextMonthNavClick}
          className="monthNavButton nextMonthButton"> {'>'} </h2>
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
      <button className="closeCalendarButton" onClick={showCalendarOnClick}> Close </button>
    </div>


  </div>)
}

export default Calendar
