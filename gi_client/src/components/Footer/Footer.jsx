import React from "react";
import styled from "styled-components";

function Footer() {
    return (
        <FooterWrapper>
            <H1>Gi Project</H1>
            <VersionP>version 0.0.0.1</VersionP>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 20vh;
    background-color: #E0F8F8;
    margin: 0;
    padding: 0;
    text-align: center;
`

const H1 = styled.h1`
    margin: 0;
    padding: auto;
    padding-top: 20px;
    overflow: hidden;
    color: #404040;
`

const VersionP = styled.p`
    font-size: 10pt;
    color: #404040;
`

export default Footer;