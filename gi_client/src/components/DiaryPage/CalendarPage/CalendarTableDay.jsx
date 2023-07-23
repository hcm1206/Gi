import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";

function CalendarTableDay(props) {

    const thisMonth = props.thisMonth
    const wlength = props.wlength;

    const { day } = props;

    if (day.month()+1 !== thisMonth) {
        return <CalendarTd/>
    }
    if (day.startOf('day').isSame(moment().startOf('day'))) {
        return <CalendarTodayTd>
                <DayNum>{day.format("D")} </DayNum>
            </CalendarTodayTd>;
    }
    return <CalendarTd><DayNum>{day.format("D")}</DayNum></CalendarTd>;
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

const WriteButton = styled.button`
    border: solid 1px red;
`


export default CalendarTableDay;