import React from "react";
import styled from "styled-components";

function HeaderLogIn() {
    return (
        <HeaderLogInWrapper>
            <HeaderLogInForm method="POST">
                <IDSection>
                    <IDDiv>ID</IDDiv>
                    <IDInput type="text" name="loginID"/>
                </IDSection>
                <PWDSection>
                    <PWDDiv>PWD</PWDDiv>
                    <PWDInput type="password" name="loginPWD"/>
                </PWDSection>
                <ButtonSection>
                    <LogInButton type="submit">Log In</LogInButton>
                    <SignUpButton>Sign Up</SignUpButton>
                </ButtonSection>
            </HeaderLogInForm>
        </HeaderLogInWrapper>
    )
}

// 전체 Wrapper
const HeaderLogInWrapper = styled.div`
    width: 15vw;
    min-width: 120px;
    height: 100px;
    float: right;
    background-color: #b8fefa;
    margin: auto;
    margin-right: 20px;
    padding: 0;
    border-radius: 20px;
`

// 로그인 Form 부분 
const HeaderLogInForm = styled.form`
    margin: 10px;
`

// ID 입력/PWD 입력/버튼 영역 분리하는 섹션
const Section = styled.div`
    height: 30px;
`

// 로그인 창 글자 부분
const PDiv = styled.div`
    font-size: 10pt;
    display: inline-block;
    width: 30%;
`

// 사용자가 ID/PWD 입력하는 Input 부분
const Input = styled.input`
    display: inline-block;
    border: solid 1px white;
    border-radius: 5px;
    width: 7vw;
    box-shadow: 1px 1px #B0B0B0;
    &:focus {
        outline: none;
        background-color: #E0F8F8;
    }
`
// 사용자가 입력하는 Button 부분
const Button = styled.button`
    width: 40%;
    height: 80%;
    white-space:nowrap;
    margin: 0 5%;
    border: none;
    border-radius: 5px;
    overflow: hidden;
`



const IDSection = styled(Section)`

`

const IDDiv = styled(PDiv)`

`

const IDInput = styled(Input)`

`

const PWDSection = styled(Section)`

`

const PWDDiv = styled(PDiv)`

`

const PWDInput = styled(Input)`

`

const ButtonSection = styled(Section)`
    align-content: center;
`

const LogInButton = styled(Button)`
    background-color: #b8fec2;
    box-shadow: 1px 1px #B0B0B0;
    &:hover{
        background-color: #24ff45;
    }

`

const SignUpButton = styled(Button)`
    background-color: #feeeb8;
    box-shadow: 1px 1px #B0B0B0;
    &:hover{
        background-color: #f7cd44;
    }
`


export default HeaderLogIn;