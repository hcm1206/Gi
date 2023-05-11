import React from "react";
import styled from "styled-components";

function FrontPage() {
    return (
        <Wrapper>
            <TextDiv><ServiceP>애플리케이션</ServiceP></TextDiv>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vh;
    height: 100%;
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
    background-color: linear-gradient( to right, rgba(1f,ff,ff,0), rgba(1f,ff,ff,1));
    background: linear-gradient( to right, rgba(31,255,255,1), rgba(31,255,255,0));
`

export default FrontPage;