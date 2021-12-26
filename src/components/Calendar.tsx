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

  // console.log('showCalendar', showCalendar)

  const currentDate = new Date()
  // currentDate.setMonth(5) set the month to june to test
  // currentDate.setMonth(1)
  console.log('date', currentDate.getDay())
  console.log('currentDate', currentDate)
  const currentDayNum = currentDate.getDate()

const currentMonthNumber = currentDate.getMonth()
const [currentMonthDisplay, setCurrentMonthDisplay] = useState<string>(displayMonthsArray[currentMonthNumber])
// console.log('currentMonth', currentMonth)
let currentDateDisplay = currentDate.toDateString()



// ======== displays correct number of days per month =================
const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate() // 0 gets the last day of the previous month. so add 1 month so it's current month.

// let daysNumbers: number[] = []
let daysNumbers: {num: number, display: string }[] = []

for(let i = 1; i <= lastDayOfMonth; i++) {
  if (i === currentDayNum) {
    console.log('days111', i, currentDayNum)
    daysNumbers.push({num: i, display: 'currentMonthCurrentDay'})
  } else {
    daysNumbers.push({num: i, display: 'currentMonth'})

  }
  // daysNumbers.push({num: i, display: 'currentMonth'})
}
// console.log('days', daysNumbers)


// =========== prev month's days to display ======



// let lastMonthDays: number[] = []
let lastMonthDays: {num: number, display: string }[] = []

const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()
console.log('prevMonthLastDay', prevMonthLastDay)

const currentDayIdx = currentDate.getDay()
for(let j = currentDayIdx; j > 0; j -- ) {
  let dayNumFromLastMonthToDisplay = prevMonthLastDay - j + 1
  console.log('dayNumFromLastMonthToDisplayOnCal', dayNumFromLastMonthToDisplay)
  // daysNumbers.unshift({num: dayNumFromLastMonthToDisplay, display: 'prevMonth'})

  lastMonthDays.push({num: dayNumFromLastMonthToDisplay, display: 'prevMonth'})

}
daysNumbers.unshift(...lastMonthDays)


// ======== create next days for display

const lastDayIdx = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDay()
console.log('lastDayIdx', lastDayIdx)

let nextDaysToDisplay = 7 - lastDayIdx - 1

for (let k = 1; k <= nextDaysToDisplay; k++ ) {
    let nextDayNum = k
    daysNumbers.push({num: nextDayNum, display: 'nextMonth'})

}
// stopped here


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

const renderCal = () => {
  // add all code here. and run when clicked next or previous etc
}

console.log('daysNumbers', daysNumbers)


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
        {daysNumbers.map((dayNumber, idx) => {
          console.log('dayNumber', dayNumber.num)
          if(dayNumber.display === 'prevMonth') {
            return(
              <div key={idx} className="dayNumber notCurrentMonthDay prevDayNumber">
                  {dayNumber.num}
              </div>
                )
          } else if (dayNumber.display === 'currentMonth') {
            return(
              <div key={idx} className="dayNumber">
                  {dayNumber.num}
              </div>
                )
          } else if (dayNumber.display === 'currentMonthCurrentDay') {
            return(
              <div key={idx} className="dayNumber currentMonthCurrentDay">
                  {dayNumber.num}
              </div>
                )
          } else if (dayNumber.display === 'nextMonth') {
            return(
              <div key={idx} className="dayNumber notCurrentMonthDay nextDayNumber">
                  {dayNumber.num}
              </div>
                )
          }
          // return(
          // <div key={idx} className="dayNumber">
          //     {dayNumber.num}
          // </div>
          //   )
        })}
      </div>
      <button className="closeCalendarButton" onClick={showCalendarOnClick}> Close </button>
    </div>


  </div>)
}

export default Calendar
