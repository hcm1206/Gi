import React, { useState } from "react";
import styled from "styled-components";

import CalendarTableDay from "./CalendarTableDay";

function CalendarTableWeek(props) {
    return (
        <CalendarTr>
            <CalendarTableDay/>
            <CalendarTableDay/>
            <CalendarTableDay/>
            <CalendarTableDay/>
            <CalendarTableDay/>
            <CalendarTableDay/>
            <CalendarTableDay/>
        </CalendarTr>
    )
}

const CalendarTr = styled.tr`
    
`

export default CalendarTableWeek;