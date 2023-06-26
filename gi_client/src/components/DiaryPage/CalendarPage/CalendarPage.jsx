import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import moment from 'moment';

import Calander from "./Calendar";

function CalendarPage() {
    const date = useParams();
    const dateMoment = moment(date.date);
    const year = dateMoment.year();
    // const currentDate = moment(`${year}-${month}`, 'YYYY-MM');



    return (
        <Wrapper>
            <Calander date={dateMoment}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 85vh;
    margin: 0;
    padding: 0;
`

export default CalendarPage;