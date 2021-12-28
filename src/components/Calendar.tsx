import React, {useState, useEffect} from 'react'

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

  const {
     showCalendar,
     showCalendarOnClick,
     setDeadline} = props

  const date = new Date()
  const [currentDate, setCurrentDate] = useState<Date>(date)
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate)
  // const [currentDayNum, setCurrentDayNum] = useState<number>(currentDate.getDate())
  const [currentMonthNumber, setCurrentMonthNumber] = useState<number>(currentDate.getMonth())
  // const [currentDateDisplay, setCurrentDateDisplay] = useState<string>(currentDate.toDateString())
  const [currentMonthDisplay, setCurrentMonthDisplay] = useState<string>(displayMonthsArray[currentMonthNumber])
  let daysNumbers: {num: number, display: string }[] = []


  useEffect(() => {
      // setCurrentDayNum(currentDate.getDate())
      setCurrentMonthNumber(currentDate.getMonth())
      setCurrentMonthDisplay(displayMonthsArray[currentMonthNumber])
      renderCal()
  })

  const renderCal = () => {

    const createDaysForCurrentMonth = () => {
      // ======== displays correct number of days per month =================
      const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate() // 0 gets the last day of the previous month. so add 1 month so it's current month.
      for(let i = 1; i <= lastDayOfMonth; i++) {
          daysNumbers.push({num: i, display: 'currentMonth'})
      }
    }



    const createPreviousMonthDays = () => {
      // =========== prev month's days to display ======
      let lastMonthDays: {num: number, display: string }[] = []
      const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()
      const currentDayIdx = currentDate.getDay()
      for(let j = currentDayIdx; j > 0; j -- ) {
        let dayNumFromLastMonthToDisplay = prevMonthLastDay - j + 1
        lastMonthDays.push({num: dayNumFromLastMonthToDisplay, display: 'prevMonth'})
      }
      daysNumbers.unshift(...lastMonthDays)
    }

    const createNextMonthDays = () => {
      // ======== create next days for display ========
      const lastDayOfCurrentMonthIdx = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDay()
      let nextDaysToDisplay = 7 - lastDayOfCurrentMonthIdx - 1
      for (let k = 1; k <= nextDaysToDisplay; k++ ) {
          let nextDayNum = k
          daysNumbers.push({num: nextDayNum, display: 'nextMonth'})
      }
    }
    createPreviousMonthDays()
    createDaysForCurrentMonth()
    createNextMonthDays()
  }



const handlePreviousMonthNavClick = (e: React.MouseEvent) => {

  const newDate = date
  newDate.setMonth(newDate.getMonth() - 1)
      setCurrentDate(newDate)

}
const handleNextMonthNavClick = (e: React.MouseEvent) => {
  date.setMonth(currentDate.getMonth() + 1)
  setCurrentDate(date)

}

const handleSelectDate = ( dayNum: number) => {
  const selectedDayAndDate = new Date(currentDate)
  selectedDayAndDate.setDate(dayNum)
  setSelectedDate(selectedDayAndDate)
  setDeadline(selectedDayAndDate.toString())

}

renderCal()


  return(<div className={showCalendar ? "calendarContainer show" : "calendarContainer hide"}>
    <div className="calendar">
      <div className="displayMonths">
      <h2
          onClick={handlePreviousMonthNavClick}
          className="monthNavButton prevMonthButton"> {'<'}</h2>
        <div className="month">
          <h1> {currentMonthDisplay} </h1>
          <p> {selectedDate.toString()}</p>
        </div>
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
          if(dayNumber.display === 'prevMonth') {
            return(
              <div key={idx} className={"dayNumber notCurrentMonthDay prevDayNumber"}>
                  {dayNumber.num}
              </div>
                )
          } else if (dayNumber.display === 'currentMonth') {
            return(
              <div
              onClick={() => {
                handleSelectDate(dayNumber.num)}
              }

               key={idx} className={selectedDate.getDate() === dayNumber.num ? " currentMonthCurrentDay dayNumber" : "dayNumber"}>
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
        })}
      </div>
      <button className="closeCalendarButton" onClick={showCalendarOnClick}> Close </button>
    </div>
  </div>)
}

export default Calendar
