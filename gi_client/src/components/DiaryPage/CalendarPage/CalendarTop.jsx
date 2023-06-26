import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from 'moment';
import { Link } from "react-router-dom";

function CalendarTop(props) {

    const date = props.date;

    const previousMonth = date.clone().subtract(1, 'month');
    const nextMonth = date.clone().add(1, 'month');

    return (
        <Wrapper>
            <TopContainer>
                <PrevButton>
                    <Link to={`/diary/${previousMonth.format('YYYY-MM')}`} style={{ textDecoration: 'none', color: "black" }}>
                        <ButtonSign>〈</ButtonSign>
                    </Link>
                </PrevButton>
                <ThisMonth>
                    <h1>{date.year()}년 {date.month()+1}월</h1>
                </ThisMonth>
                <NextButton>
                    <Link to={`/diary/${nextMonth.format('YYYY-MM')}`} style={{ textDecoration: 'none', color: "black" }}>
                        <ButtonSign>〉</ButtonSign>
                    </Link>   
                </NextButton>
            </TopContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 90%;
    height: 10%;
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
    height: 100%;
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