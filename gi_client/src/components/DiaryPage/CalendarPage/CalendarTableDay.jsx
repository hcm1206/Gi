import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";

function CalendarTableDay(props) {

    const thisMonth = props.thisMonth
    const wlength = props.wlength;

    const { day } = props;

    if (day.month()+1 != thisMonth) {
        return <CalendarTd></CalendarTd>;
    }
    return <CalendarTd>{day.format("D")}</CalendarTd>;
}

const CalendarTd = styled.td`
    width: calc(100% / 7);
    height: calc(90% / wlength);
    margin: 0;
    padding: 0;
    border: 1px solid #80FFFF;
`


export default CalendarTableDay;