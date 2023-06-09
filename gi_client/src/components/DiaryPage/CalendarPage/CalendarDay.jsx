import React, { useState } from "react";
import styled from "styled-components";

function CalendarDay(props) {
    return (
        <Wrapper>
            <DayContainer></DayContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 15%;
    height: 15%;
    margin: 0;
    padding: 0;
    border: solid black 1px;
`

const DayContainer = styled.div`
    width: 90%;
    height: 90%;
    margin: 5%;
    border: solid red 1px;
`

export default CalendarDay;