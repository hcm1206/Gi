import './App.css';
import axios from "axios";
import {useEffect} from "react";
import Header from './components/Header/Header';
import Body from './components/Body';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';

// import React, {useEffect} from "React";
// import styled from "styled-components";

function App() {


  // ==================== 서버측 RouterTest와의 axios 연동 테스트 코드 ====================
  const callApi = async () => {
    axios.get("/api"
      ).then((res)=>console.log(res.data.test)
      ).catch((err) => console.log(err)
    );
  };

  useEffect(() => {
    callApi();
  }, []);
  // ================================================================================

  return (
    <Wrapper>
      <Header/>
      <Body/>
      <Footer/>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`