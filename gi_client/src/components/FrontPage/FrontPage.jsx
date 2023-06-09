import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

function FrontPage() {
    return (
        <Wrapper>
            <Link to="/diary" style={{ textDecoration: 'none', color: "black" }}><TextDiv><ServiceP>일기는 일기장에</ServiceP></TextDiv></Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 85vh;
    margin: 0;
    padding: 0;
`

const TextDiv = styled.div`
    margin: 5% 5%;
    white-space:nowrap;
`

const P = styled.p`

`

const ServiceP = styled(P)`
    font-size: 24pt;
    font-weight: bold;
    background: linear-gradient( to right, rgba(31,255,255,1), rgba(31,255,255,0));
`

export default FrontPage;