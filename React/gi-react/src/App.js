import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';

// import React, {useEffect} from "React";
// import styled from "styled-components";

function App() {
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