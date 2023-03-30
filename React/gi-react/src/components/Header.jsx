import React from "react";
import styled from "styled-components";

function Header() {
    return (
        <HeadWrapper>
            <H1>Header</H1>
        </HeadWrapper>
    )
}

const HeadWrapper = styled.div`
    width: 100%;
    height: 100px;
    background-color: #A0F0F0;
    margin: 0;
    padding: 0;
`

const H1 = styled.h1`
    margin: 0;
`

export default Header;