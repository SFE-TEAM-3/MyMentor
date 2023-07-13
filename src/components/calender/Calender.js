import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./calender.css";
const Calendar = () => {
  const [currYear, setCurrYear] = useState(0);
  const [currMonth, setCurrMonth] = useState(0);
  const [dateRanges] = useState([
    [new Date("2023-07-10"), new Date("2023-07-20")],
    [new Date("2023-08-05"), new Date("2023-08-15")],
  ]);

  useEffect(() => {
    const currentDate = new Date();
    setCurrYear(currentDate.getFullYear());
    setCurrMonth(currentDate.getMonth());
  }, []);

  const renderCalendar = () => {
    const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    const lastDayOfMonth = new Date(
      currYear,
      currMonth,
      lastDateOfMonth
    ).getDay();
    const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

    const liTags = [];

    for (let i = firstDayOfMonth; i > 0; i--) {
      const key = `inactive-${lastDateOfLastMonth - i + 1}`;
      liTags.push(
        <li key={key} className="inactive">
          {lastDateOfLastMonth - i + 1}
        </li>
      );
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      const currentDate = new Date(currYear, currMonth, i);
      const isToday =
        i === new Date().getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear();
      const isSunday = currentDate.getDay() === 0;
      let isInRange = "";

      for (let j = 0; j < dateRanges.length; j++) {
        const startDate = dateRanges[j][0];
        const endDate = dateRanges[j][1];

        if (currentDate >= startDate && currentDate <= endDate) {
          if (currentDate.getTime() === startDate.getTime()) {
            isInRange = "highlight-start";
          } else if (currentDate.getTime() === endDate.getTime()) {
            isInRange = "highlight-end";
          } else {
            isInRange = "highlight-range";
          }
        }
      }

      const key = `${i}-${currMonth}-${currYear}`;
      liTags.push(
        <li
          key={key}
          className={`${isToday ? "active" : ""} ${
            isSunday ? "sunday" : ""
          } ${isInRange}`}
        >
          {i}
        </li>
      );
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
      const key = `inactive-${i - lastDayOfMonth + 1}`;
      liTags.push(
        <li key={key} className="inactive">
          {i - lastDayOfMonth + 1}
        </li>
      );
    }

    return liTags;
  };

  const handlePrevNextClick = (increment) => {
    let newMonth = currMonth + increment;
    let newYear = currYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear = currYear - 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear = currYear + 1;
    }

    setCurrMonth(newMonth);
    setCurrYear(newYear);
  };

  return (
    <div className="container mx-auto" style={{overflow:'hidden'}}>
      <div className="meme d-flex">
        <div className="cal-box">
          <div className="wrapper">
            <header className="meme-title">
              <p className="current-date">{months[currMonth]}</p>
              <div className="icons">
                <span
                  id="prev"
                  className="material-symbols-rounded"
                  onClick={() => handlePrevNextClick(-1)}
                >
                  <FaChevronLeft />
                </span>
                <span
                  id="next"
                  className="material-symbols-rounded"
                  onClick={() => handlePrevNextClick(1)}
                >
                  <FaChevronRight />
                </span>
              </div>
            </header>
            <div className="calendar">
              <ul className="days-list">
                <li className="red-text">Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul>
              <ul className="days">{renderCalendar()}</ul>
            </div>
          </div>
        </div>
        <div className="cal-circle-box">
          <div className="wrapper2">
            <div className="circle-container">
              <div className="circle">
                <span className="month-number">{currMonth + 1}</span>
              </div>
            </div>
            <div className="rectangle-container">
              <div className="rectangle">
                <span className="year-number">{currYear}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

const months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
