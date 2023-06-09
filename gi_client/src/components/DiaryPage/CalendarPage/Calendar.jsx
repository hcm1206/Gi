import React, { useState } from "react";
import styled from "styled-components";

import CalendarDay from "./CalendarDay";
import CalendarTop from "./CalendarTop";



function Calander() {
    return (
        <Wrapper>
            <CalendarTop/>
            <CalendarDay/>
            <CalendarDay/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
`

export default Calander;