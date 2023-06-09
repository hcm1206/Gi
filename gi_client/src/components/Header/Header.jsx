import React from "react";
import styled from "styled-components";
import HeaderTop from "./HeaderTop";
import HeaderMenu from "./HeaderMenu";



function Header() {
    return (
        <HeadWrapper>
            <HeaderTop/>
            <HeaderMenu/>
        </HeadWrapper>
    )
}

const HeadWrapper = styled.div`
    width: 100vw;
    height: 15vh;
    background-color: #F0FFFF;
    margin: 0;
    padding: 0;
`

export default Header;