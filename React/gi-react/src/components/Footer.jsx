import React from "react";
import styled from "styled-components";

function Footer() {
    return (
        <FooterWrapper>
            <H1>Footer</H1>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    width: 100%;
    height: 100px;
    background-color: #A0A0A0;
    margin: 0;
    padding: 0;
`

const H1 = styled.h1`
    margin: 0;
`

export default Footer;