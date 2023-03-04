import { WEEKDAYS, CALENDAR_DAYS_LENGTH } from "../constants";

const CalendarGrid = ({ currentDay }) => {
    // sets the 1st day of the month temporarily based on current month
    const firstDayOfMonth = new Date(
        currentDay.getFullYear(),
        currentDay.getMonth(),
        1
    );

    // gets the nth weekday of firstDayOfMonth
    const weekdayOfFirstDay = firstDayOfMonth.getDay();

    let currentDays = [];

    for (let day = 0; day < CALENDAR_DAYS_LENGTH; day++) {
        // during 1st iteration and if weekdayOfFirstDay is sunday
        if (day === 0 && weekdayOfFirstDay === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else if (day === 0) {
            //reinitialize firstDayOfMonth
            firstDayOfMonth.setDate(
                firstDayOfMonth.getDate() - weekdayOfFirstDay
            );
        } else {
            // firstDayOfMonth
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }

        let calendarDay = {
            number: firstDayOfMonth.getDate(),
            isCurrentMonth:
                firstDayOfMonth.getMonth() === currentDay.getMonth(),
            isCurrentDay:
                firstDayOfMonth.toDateString() === currentDay.toDateString(),
        };

        currentDays.push(calendarDay);
    }

    return (
        <div className="calendar-grid">
            {WEEKDAYS.map((dayName) => (
                <div className="calendar-weekdays-name" key={dayName}>
                    <h3>{dayName}</h3>
                </div>
            ))}
            {currentDays.map((day, index) => {
                return (
                    <div
                        key={index}
                        className={
                            (day.isCurrentMonth
                                ? "current-month"
                                : "not-current-month") +
                            (day.isCurrentDay ? " current-day" : "")
                        }
                        onClick={() => props.changeCurrentDay(day)}
                    >
                        <p>{day.number}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default CalendarGrid;
