import React from "react";
import styled from "styled-components";
import HeaderLogIn from "./HeaderLogIn";
import {Link} from "react-router-dom";


function HeaderTop() {
    return (
        <HeaderTopWrapper>
            <LogoWrapper>
                <Link to="/">
                    <LogoImg src="imgs/Gi_Logo.png" alt="Gi Logo"/>
                </Link>
            </LogoWrapper>
            <H1>Welcome To Gi Project</H1>
            <HeaderLogIn/>
        </HeaderTopWrapper>
    )
}

const HeaderTopWrapper = styled.div`
    height: 70%;
    display: flex;
    justify-content: space-between;
`

const LogoWrapper = styled.div`
    height: 80%;
    margin: 10px;
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