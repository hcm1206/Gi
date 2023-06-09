import React, { useState } from "react";
import styled from "styled-components";

function CalendarTop() {
    const dt = new Date();

    return (
        <Wrapper>
            <TopContainer>
                <PrevButton><ButtonSign>〈</ButtonSign></PrevButton>
                <ThisMonth>
                    <h1>{dt.getFullYear()}년 {dt.getMonth()+1}월</h1>
                </ThisMonth>
                <NextButton><ButtonSign>〉</ButtonSign></NextButton>
            </TopContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 20%;
    margin: 0;
    padding: 0;
`

const TopContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
`

const ThisMonth = styled.div`
    width: 20%;
    height: 50%;
    display: inline-block;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    width: 5%;
    height: 50%;
    white-space:nowrap;
    margin: 0;
    border: none;
    border-radius: 5px;
    overflow: hidden;
    display: inline-block;
`

const PrevButton = styled(Button)`
    float: left;
    margin-left: 30%;
`
const NextButton = styled(Button)`
    float: right;
    margin-right: 30%;
`

const ButtonSign = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: auto;
    width: 100%;
    height: 100%;
    font-size : 30pt;
    font-weight: bold;
`



export default CalendarTop;