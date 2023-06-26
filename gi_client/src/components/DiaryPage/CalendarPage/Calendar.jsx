import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from 'moment';

import CalendarTop from "./CalendarTop";
import CalendarTable from "./CalendarTable";


function Calander(props) {

    const date = props.date;

    return (
        <Wrapper>
            <CalendarTop date={date}/>
            <CalendarTable date={date}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 2.5% 5%;
    padding: 0;
`

export default Calander;