import React from "react";
import styled from "styled-components";
import { Routes, Route } from 'react-router-dom';

import FrontPage from './FrontPage/FrontPage';
import SignUpPage from "./SignUpPage/SignUpPage";
import CalendarPage from "./DiaryPage/CalendarPage/CalendarPage";
import ErrorPage from "./ErrorPage/ErrorPage";

function Body() {
    return (
        <BodyWrapper>
            <Routes>
                <Route exact path='/' element={<FrontPage/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>
                <Route path='/diary/:date' element={<CalendarPage/>}/>
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </BodyWrapper>
    )
}


// 높이는 나중에 수정
const BodyWrapper = styled.div`
    width: 100%;
    background-color: #FAFFFF;
    margin: 0;
    padding: 0;
`

export default Body;