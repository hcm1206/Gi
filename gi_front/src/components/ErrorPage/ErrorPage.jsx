import React from "react";
import styled from "styled-components";

function ErrorPage() {
    return (
        <Wrapper>
            <H1>404 Error. 해당 페이지를 찾을 수 없습니다.</H1>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    background-color: #FAFFFF;
    margin: 0;
    padding: 0;

`

const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const OGSImg = styled.img`
    margin: 2% auto;
    position: relative;
    width: 50vw;
    left: 25vw;
`

const H1 = styled.h1`
    margin: 5%;
    margin-top: 5%;
    white-space:nowrap;
    font-size: 24pt;
    font-weight: bold;
    background: linear-gradient( to right, rgba(0,95,255,1), rgba(0,95,255,0));
    position: relative;
    width: 50vw;
    left: 25vw;
`

export default ErrorPage;