import React, { useState } from "react";
import styled from "styled-components";

function CalendarTableTop() {
    return (
        <CalendarTopTr>
            <CalendarTopSun>일</CalendarTopSun>
            <CalendarTop>월</CalendarTop>
            <CalendarTop>화</CalendarTop>
            <CalendarTop>수</CalendarTop>
            <CalendarTop>목</CalendarTop>
            <CalendarTop>금</CalendarTop>
            <CalendarTopSat>토</CalendarTopSat>
        </CalendarTopTr>
    )
}

const CalendarTopTr = styled.tr`
    
`

const CalendarTop = styled.th`
    width: calc(100% / 7);
    height: 10%;
    margin: 0;
    padding: 0;
    border: 1px solid #80D0FF;
`

const CalendarTopSun = styled(CalendarTop)`
    color: #FF0000;
`

const CalendarTopSat = styled(CalendarTop)`
    color: #0000FF;
`

export default CalendarTableTop;