import React from "react";
import styled from "styled-components";

const TBDOnClick = () => {
    alert("서비스 준비 중입니다.");
}

function HeaderMenu() {
    return (
        <HeadMenuWrapper>
            <HeadMenuUl>
                <HeadMenuOpen/>
                <HeadMenuItem onClick={TBDOnClick}><HeadMenuLink>Diary</HeadMenuLink></HeadMenuItem>
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
    height: 40px;
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
    margin: 10px 0;
    padding: 0;
`

export default HeaderMenu;