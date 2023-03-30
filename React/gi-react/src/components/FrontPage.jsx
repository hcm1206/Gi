import React from "react";
import styled from "styled-components";

function FrontPage() {
    return (
        <Wrapper>
            <H1>Gi Cyber Basecamp FrontPage</H1>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vh;
    height: 100%;
    margin: 0;
    padding: 0;
`

const H1 = styled.h1`
    margin: 0;
    background-color: #fbe8a8;
`

export default FrontPage;