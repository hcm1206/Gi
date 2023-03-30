import React from "react";
import styled from "styled-components";
import FrontPage from './FrontPage'

function Body() {
    return (
        <BodyWrapper>
            <H1>Body</H1>
            <FrontPage/>
        </BodyWrapper>
    )
}

const BodyWrapper = styled.div`
    width: 100%;
    height: 1000px;
    background-color: #A0F0A0;
    margin: 0;
    padding: 0;
`

const H1 = styled.h1`
    margin: 0;
`

export default Body;