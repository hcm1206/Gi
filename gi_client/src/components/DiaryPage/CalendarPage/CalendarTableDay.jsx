import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

function CalendarTableDay(props) {

    const thisMonth = props.thisMonth
    const wlength = props.wlength;

    const { day } = props;

    if (day.month()+1 !== thisMonth) {
        return <CalendarTd></CalendarTd>;
    }

    if (day.startOf('day').isSame(moment().startOf('day'))) {
        return (
            <CalendarTodayTd>
                <Link to={`/diary/write/${day.year()}-${day.month()+1}-${day.day()}`} style={{ textDecoration: 'none', color: "black" }}>
                    <DayNum>{day.format("D")} </DayNum>
                </Link>
            </CalendarTodayTd>
        );
    } else {
        return (
            <CalendarTd>
                <Link to={`/diary/read/${day.year()}-${day.month()+1}-${day.day()}`} style={{ textDecoration: 'none', color: "black" }}>
                    <DayNum>{day.format("D")} </DayNum>
                </Link>
            </CalendarTd>
        );
    }
}


const CalendarTd = styled.td`
    width: calc(100% / 7);
    height: calc(90% / wlength);
    margin: 0;
    padding: 0;
    border: 1px solid #80FFFF;
`

const CalendarTodayTd = styled(CalendarTd)`
    background-color: #BFFFC4;
`

const DayNum = styled.p`
    margin-left: 5%;
    width: 20%;
    font-size: 15pt;
`


export default CalendarTableDay;