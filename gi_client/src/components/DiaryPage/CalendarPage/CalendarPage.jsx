import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, Navigate } from 'react-router-dom';
import moment from 'moment';

import Calander from "./Calendar";

import { isValidMonth } from "../../../functions/DiaryFunctions";

function CalendarPage() {

    const date = useParams();

    const dateMoment = moment(date.date);

    if (!isValidMonth(dateMoment)) {
      // 유효하지 않은 date 값이면 NotFoundPage로 리디렉션
      return <Navigate to="/ErrorPage"/>;
    }

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