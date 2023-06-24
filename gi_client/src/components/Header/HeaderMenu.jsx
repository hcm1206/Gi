import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import moment from 'moment';

const TBDOnClick = () => {
    alert("서비스 준비 중입니다.");
}

function HeaderMenu() {

    const year = moment().year();
    const month = moment().month()+1;

    return (
        <HeadMenuWrapper>
            <HeadMenuUl>
                <HeadMenuOpen/>
                <HeadMenuItem><Link to={`/diary/${year}-${month}`} style={{ textDecoration: 'none', color: "black" }}><HeadMenuLink>Diary</HeadMenuLink></Link></HeadMenuItem>
                <HeadMenuItem onClick={TBDOnClick}><HeadMenuLink>TBD</HeadMenuLink></HeadMenuItem>
                <HeadMenuItem onClick={TBDOnClick}><HeadMenuLink>TBD</HeadMenuLink></HeadMenuItem>
                <HeadMenuItem onClick={TBDOnClick}><HeadMenuLink>TBD</HeadMenuLink></HeadMenuItem>
                <HeadMenuItem onClick={TBDOnClick}><HeadMenuLink>TBD</HeadMenuLink></HeadMenuItem>
            </HeadMenuUl>
        </HeadMenuWrapper>
    )
}

const HeadMenuWrapper = styled.nav`
    width: 100vw;
    height: 30%;
    background-color: #E0F8F8;
    margin: 0;
    padding: 0;
    overflow:hidden;
`

const HeadMenuUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    border-bottom: 3px solid #F0FFFF;
`

const HeadMenuLi = styled.li`
    margin: 0;
    padding: 0;
    height: 100%;
    float: left;
    list-style-type: none;
    border-right: 3px solid #F0FFFF;
    text-align: center;
    padding: auto;
    justify-content: center;
    transition: 0.2s;
`

const HeadMenuOpen = styled(HeadMenuLi)`
    width: 5%;
`

const HeadMenuItem = styled(HeadMenuLi)`
    width: 10%;
    &:hover{
        background-color: #1fffff;
    }
    transition: 0.5s;
`

const HeadMenuLink = styled.div`
    display: block;
    text-align: center;
    text-decoration: none;
    margin: 6% 0;
    padding: 0;
`

export default HeaderMenu;