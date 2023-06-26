import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";

import CalendarTableDay from "./CalendarTableDay";

function CalendarTableWeek(props) {
    const { week } = props;
    const startOfWeek = moment(week[0]).startOf("week");

    return (
        <CalendarTr>
            {week.map((day, index) => {
                const currentDay = startOfWeek.clone().add(index, "day");
                return <CalendarTableDay key={index} day={currentDay} wlength={props.wlength} thisMonth={props.thisMonth} />;
            })}
        </CalendarTr>
    );
}

const CalendarTr = styled.tr`
    
`

export default CalendarTableWeek;