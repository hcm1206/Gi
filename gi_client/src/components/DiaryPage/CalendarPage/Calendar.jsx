import React, { useState } from "react";
import styled from "styled-components";
import moment from 'moment';

import CalendarTop from "./CalendarTop";
import CalendarTable from "./CalendarTable";


function Calander(props) {

    const year = props.year;
    const month = props.month;

    return (
        <Wrapper>
            <CalendarTop year={year} month={month}/>
            <CalendarTable year={year} month={month}/>
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