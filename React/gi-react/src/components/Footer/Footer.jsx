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
    width: 100%;
    height: 100px;
    background-color: #E0F8F8;
    margin: 0;
    padding: 0;
    text-align: center;
`

const H1 = styled.h1`
    margin: 0;
    padding: auto;
    overflow: hidden;
    color: #6b9098;
`

const VersionP = styled.p`
    font-size: 10pt;
    color: #6b9098;
`

export default Footer;