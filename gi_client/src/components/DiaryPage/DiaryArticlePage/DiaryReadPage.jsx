import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";
import moment from 'moment';

import { isValidDate } from "../../../functions/DiaryFunctions";


function DiaryReadPage(props) {
    const date = useParams();
    const dateMoment = moment(date.date);

    if (!isValidDate(dateMoment)) {
      // 유효하지 않은 date 값이면 NotFoundPage로 리디렉션
      return <Navigate to="/ErrorPage"/>;
    }

    return (
        <Wrapper>
            <h1>일기 조회 페이지</h1>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
`

export default DiaryReadPage;