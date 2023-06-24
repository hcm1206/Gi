import React, { useState } from "react";
import styled from "styled-components";

import CalendarTableWeek from "./CalendarTableWeek";
import CalendarTableTop from "./CalendarTableTop";


function CalendarTable() {
    return (
        <Wrapper>
            <CalendarTb>
                <CalendarTableTop/>
                <CalendarTableWeek/>
                <CalendarTableWeek/>
                <CalendarTableWeek/>
                <CalendarTableWeek/>
                <CalendarTableWeek/>
                <CalendarTableWeek/>
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