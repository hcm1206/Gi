import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";
import moment from 'moment';

import { isValidDate } from "../../../functions/DiaryFunctions";

function DiaryWritePage(props) {
    const date = useParams();
    const dateMoment = moment(date.date);

    const [title, setTitle] = useState("");
    const [weather, setWeather] = useState("");
    const [article, setArticle] = useState("");

    if (!isValidDate(dateMoment)) {
      // 유효하지 않은 date 값이면 NotFoundPage로 리디렉션
      return <Navigate to="/ErrorPage"/>;
    }

    return (
        <Wrapper>
            <FormDiv>
                <DiaryForm>
                    <DiaryHeaderSection>
                        <DiaryTitleSection>
                            <TitleFormLabel>제목</TitleFormLabel>
                            <DiaryTitleInput type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </DiaryTitleSection>
                        <DiaryWeatherSection>
                            <WeatherFormLabel>날씨</WeatherFormLabel>
                            <DiaryWeatherInput type="text" value={weather} onChange={(e) => setWeather(e.target.value)}/>
                        </DiaryWeatherSection>
                    </DiaryHeaderSection>
                    <DiaryArticleSection>
                        <FormLabel>본문</FormLabel>
                        <DiaryArticleTextArea value={article} onChange={(e) => setArticle(e.target.value)}></DiaryArticleTextArea>
                    </DiaryArticleSection>
                    <DiaryFooterSection>
                        <FormSubmitWrapper>
                            <FormButton>일기 저장</FormButton>
                        </FormSubmitWrapper>
                    </DiaryFooterSection>
                </DiaryForm>
            </FormDiv>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
`

const FormDiv = styled.div`
    width: 90%;
    margin: 5%;
    padding: 0;
`

const DiaryForm = styled.form`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
`

const DiarySection = styled.div`
    border: 1px cyan solid;
`

const DiaryHeaderSection = styled(DiarySection)`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center; 
    align-items: center; 
`;


const DiaryArticleSection = styled(DiarySection)`
    height: 70vh;
`

const DiaryFooterSection = styled(DiarySection)`
    height: 10vh;
    display: flex; 
    align-items: center;
    justify-content: center;
`;

const DiaryTitleSection = styled(DiarySection)`
    display: flex;
    width: 80%;
    height: 100%;
    align-items: center; 
    border: none;
    border-right: 1px cyan solid;
`;

const DiaryWeatherSection = styled(DiarySection)`
    display: flex;
    width: 20%;
    height: 100%;
    align-items: center; 
    border: none;
`;

const FormLabel = styled.p`
    font-size: 14pt;
    text-align: left;
    padding-left: 10px;
`;

const DiaryInput = styled.input`
    width: 70%;
    font-size: 14pt;
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

const TitleFormLabel = styled(FormLabel)`
    width: 10%;
`

const WeatherFormLabel = styled(FormLabel)`
    width: 30%;
`

const DiaryTitleInput = styled(DiaryInput)`
    width: 80%;
`

const DiaryWeatherInput = styled(DiaryInput)`
    width: 60%;
`

const DiaryArticleTextArea = styled.textarea`
    width: 100%;
    height: 90%;
    font-size: 14pt;
    border: 2px solid #1fffff;
    border-radius: 5px;
    resize: vertical;
    box-sizing: border-box;
    &:focus {
        outline: none;
        border: 2px solid #1fe0e0;
        background-color: #F0FFFF;
    }
`;

const FormSubmitWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 10%;
    height: 50%;
`

const FormButton = styled.button`
    width: 100%;
    font-size: 14pt;
    border: none;
    border-radius: 5px;
    overflow: hidden;
    background-color: #E0F8F8;
    box-shadow: 1px 1px #B0B0B0;
    &:hover{
        background-color: #1fffff;
    }
    transition: 0.5s;
`

export default DiaryWritePage;