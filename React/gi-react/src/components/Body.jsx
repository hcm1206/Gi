import React from "react";
import styled from "styled-components";
import FrontPage from './FrontPage/FrontPage';
import SignUpPage from "./SignUpPage.jsx/SignUpPage";
import ErrorPage from "./ErrorPage/ErrorPage";

// 라우팅 처리 예정

function Body() {
    return (
        <BodyWrapper>
            <FrontPage/>
            {/* <SignUpPage/> */}
            {/* <ErrorPage/> */}
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