import React from "react";
import styled from "styled-components";
import HeaderLogIn from "./HeaderLogIn";


function HeaderTop() {
    return (
        <HeaderTopWrapper>
            <LogoWrapper>
                <a href="/">
                    <LogoImg src="imgs/Gi_Logo.png" alt="Gi Logo"/>
                </a>
            </LogoWrapper>
            <H1>Welcome To Gi Project</H1>
            <HeaderLogIn/>
        </HeaderTopWrapper>
    )
}

const HeaderTopWrapper = styled.div`
    height: 120px;
    display: flex;
    justify-content: space-between;
`

const LogoWrapper = styled.div`
    height: 80px;
    margin: 20px;
`

const LogoImg = styled.img`
    width: 100%;
    height: 100%;
`

const H1 = styled.h1`
    margin: auto 50px;
    white-space:nowrap;
`

export default HeaderTop;