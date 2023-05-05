import React from "react";
import styled from "styled-components";
import FrontPage from './FrontPage/FrontPage';

function Body() {
    return (
        <BodyWrapper>
            <FrontPage/>
        </BodyWrapper>
    )
}

const BodyWrapper = styled.div`
    width: 100%;
    height: 1000px;
    background-color: #FAFFFF;
    margin: 0;
    padding: 0;
`

export default Body;