import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from 'moment';

import CalendarTableWeek from "./CalendarTableWeek";
import CalendarTableTop from "./CalendarTableTop";
  
  

function CalendarTable(props) {

    const date = props.date;
    const thisMonth = moment(date).month()+1;
    const startOfMonth = moment(date).startOf("month");
    const endOfMonth = moment(date).endOf("month");
    const startDay = startOfMonth.clone();
    const weeks = [];

    const firstDay = startDay.day();
    const currentDay = startDay.subtract(firstDay, "day");


    while (currentDay.isBefore(endOfMonth, "day")) {
        weeks.push(
            Array(7)
                .fill(0)
                .map(() => {
                    currentDay.add(1, "day");
                    return currentDay.clone();
                })
        );
    }


    return (
        <Wrapper>
            <CalendarTb>
                <CalendarTableTop/>
                {weeks.map((week, index) => (
                        <CalendarTableWeek key={index} week={week} wlength={weeks.length} thisMonth={thisMonth} />
                ))}
            </CalendarTb>
        </Wrapper>
    )
}


const CalendarTb = styled.table`
    width: 90%;
    height: 100%;
    margin: 2.5% 0;
    padding: 0;
    border-collapse: collapse;
    border: 1px solid #80D0FF;
    background-color: #EEFFFF;
`

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 80%;
    margin: 0;
    padding: 0;
`

export default CalendarTable;