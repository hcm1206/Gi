import React, { useState } from "react";
import styled from "styled-components";

function SignUpPage() {

    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwdConfirm, setPwdConfirm] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    return (
        <Wrapper>
            <FormDiv>
                <SignUpForm>
                    <FormSection>
                        <FormP>아이디</FormP>
                        <FormInput type="text" value={id} onChange={(e) => setId(e.target.value)}></FormInput>
                        <FormButton type="button">중복 확인</FormButton>
                    </FormSection>
                    <FormSection>
                        <FormP>패스워드</FormP>
                        <FormInput type="password" value={pwd} onChange={(e) => setPwd(e.target.value)}></FormInput>
                    </FormSection>
                    <FormSection>
                        <FormP>패스워드 확인</FormP>
                        <FormInput type="password" value={pwdConfirm} onChange={(e) => setPwdConfirm(e.target.value)}></FormInput>
                    </FormSection>
                    <FormSection>
                        <FormP>이름</FormP>
                        <FormInput type="text" value={name} onChange={(e) => setName(e.target.value)}></FormInput>
                    </FormSection>
                    <FormSection>
                        <FormP>나이</FormP>
                        <FormInput type="number" value={age} onChange={(e) => setAge(e.target.value)}></FormInput>
                    </FormSection>
                    <FormSection>
                        <FormP>성별</FormP>
                        <FormSelect value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="male">남성</option>
                            <option value="female">여성</option>
                            <option value="female">LGBT</option>
                        </FormSelect>
                    </FormSection>
                    <FormSubmitWrapper>
                        <FormButton>회원가입</FormButton>
                    </FormSubmitWrapper>
                </SignUpForm>
            </FormDiv>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    padding: 0;
`

const FormDiv = styled.div`
    margin: 10%;
`

const SignUpForm = styled.form`
    margin: 0;
    padding: 0;
`

const FormSection = styled.div`

`

const FormP = styled.p`
    display: inline-block;
    width: 30%;
    text-align: center;
`

const FormInput = styled.input`
    width: 30%;
    display: inline-block;
    outline: none;
    border: 2px solid #1fffff;
    border-radius: 5px;
    &:focus {
        outline: none;
        border: 2px solid #1fe0e0;
        background-color: #E0F8F8;
    }
`

const FormSelect = styled.select`
    width: 30%;
    display: inline-block;
`

const FormSubmitWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const FormButton = styled.button`
    margin-left: 5%;
`


export default SignUpPage;