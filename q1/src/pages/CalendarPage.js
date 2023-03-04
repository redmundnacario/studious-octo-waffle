import React from "react";

import CalendarGrid from "../components/CalendarGrid";
import { MONTHS } from "../constants";

import "../styles/Calendar.css";

const CalendarPage = () => {
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
                <CalendarGrid currentDay={currentDay} />
            </div>
        </div>
    );
};

export default CalendarPage;
