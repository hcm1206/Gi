import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, Navigate } from 'react-router-dom';
import moment from 'moment';

import Calander from "./Calendar";

function CalendarPage() {

    const date = useParams();

    const dateMoment = moment(date.date);
    const year = dateMoment.year();

    if (!isValidDate(dateMoment)) {
      // 유효하지 않은 date 값이면 NotFoundPage로 리디렉션
      return <Navigate to="/ErrorPage"/>;
    }

    return (
        <Wrapper>
            <Calander date={dateMoment}/>
        </Wrapper>
    )
}

function isValidDate(date) {
  const dateFormat = 'YYYY-MM';
  const minDate = '1900-01';
  const maxDate = '2099-12';
  const momentDate = moment(date, dateFormat, true); // strict 모드로 날짜 파싱 시도
  return (
    momentDate.isValid() && // moment 객체가 유효한 날짜인지 확인
    momentDate.isSameOrAfter(minDate) && // 최소 날짜 이후인지 확인
    momentDate.isSameOrBefore(maxDate) // 최대 날짜 이전인지 확인
  );
}

const Wrapper = styled.div`
    width: 100%;
    height: 85vh;
    margin: 0;
    padding: 0;
`

export default CalendarPage;