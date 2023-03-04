import React from "react";

import CalendarTable from "./CalendarTable";
import { MONTHS } from "../constants";

import "../styles/Calendar.css";

const Calendar = () => {
    const currentDay = new Date();

    return (
        <div className="calendar">
            <div className="calendar-header">
                <div className="title">
                    <h2>
                        {MONTHS[currentDay.getMonth()]}{" "}
                        {currentDay.getFullYear()}
                    </h2>
                </div>
            </div>
            <div className="calendar-body">
                <CalendarTable currentDay={currentDay} />
            </div>
        </div>
    );
};

export default Calendar;
