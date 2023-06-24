import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import moment from 'moment';

import Calander from "./Calendar";

function CalendarPage() {
    // date 문자열을 current 쿼리로 설정 필요
    const { date } = useParams();
    // const currentDate = moment(`${year}-${month}`, 'YYYY-MM');

    

    // useEffect(() => {
    //     console.log("현재 날짜 : ",currentDate);
    //   });

    return (
        <Wrapper>
            <Calander date={date}/>
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