import React, { useState } from "react";
import styled from "styled-components";

function CalendarTableDay(props) {
    return (
        <CalendarTd></CalendarTd>
    )
}

const CalendarTd = styled.td`
    width: calc(100% / 7);
    height: calc(90% / 6);
    margin: 0;
    padding: 0;
    border: 1px solid #80FFFF;
`


export default CalendarTableDay;