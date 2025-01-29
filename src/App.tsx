import React, { useState } from 'react';
import Output from './components/Output';
import styled, { createGlobalStyle } from 'styled-components';
import { MainContext, useDataContext } from './components/context';
import Checkboxes from './components/Checkboxes';
import GenerateButton from './components/GenerateButton';
import StrengthMeter from './components/StrengthMeter';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  
  body {
    font-family: JetBrains Mono;
    background-color: #18171F;
    color: #FFF;
  }
`
export type GeneralContext = {
  upper: {
      state: boolean, 
      event: (e: React.ChangeEvent<HTMLInputElement>) => void
  },
  lower: {
      state: boolean, 
      event: (e: React.ChangeEvent<HTMLInputElement>) => void
  },
  numbers: {
      state: boolean,  
      event: (e: React.ChangeEvent<HTMLInputElement>) => void
  },
  symbols: {
      state: boolean, 
      event: (e: React.ChangeEvent<HTMLInputElement>) => void
  },
  pass: {
      value: string, 
      setValue: React.Dispatch<React.SetStateAction<string>>
  },
  passLength: {
      value:number, 
      setValue: React.Dispatch<React.SetStateAction<number>>
  },
  copy: {
    value: string,
    setCopy: React.Dispatch<React.SetStateAction<string>>
  }
}


function App() {
  const [upperLetters, setUpperLetters] = useState<boolean>(false);
  const [lowerLetters, setLowerLetters] = useState<boolean>(false);
  const [numbers, setNUmbers] = useState<boolean>(false);
  const [symbols, setSymbols] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("Password");
  const [length, setLength] = useState<number>(10);
  const [copyText, setCopyText] = useState("");

  
  function handleUpperLetters(e: React.ChangeEvent<HTMLInputElement>){
    setUpperLetters(e.target.checked)
  }
  function handleLowerLetters(e: React.ChangeEvent<HTMLInputElement>){
    setLowerLetters(e.target.checked)
  }
  function handleNumbers(e: React.ChangeEvent<HTMLInputElement>){
    setNUmbers(e.target.checked)
  }
  function handleSymbols(e: React.ChangeEvent<HTMLInputElement>){
    setSymbols(e.target.checked)
  }

  const data = {
    upper: {
      state: upperLetters, 
      event: handleUpperLetters
    },
    lower: {
      state: lowerLetters, 
      event: handleLowerLetters
    },
    numbers: {
      state: numbers, 
      event: handleNumbers
    },
    symbols: {
      state: symbols, 
      event: handleSymbols
    },
    pass: {
      value: password, 
      setValue: setPassword
    },
    passLength: {
      value: length, 
      setValue: setLength
    },
    copy:{
      value: copyText,
      setCopy: setCopyText
    }
    };

  return (
    <>
    <MainContext.Provider value={data}>
      <GlobalStyle />
      <GeneratorWrapper>
      
      <Output />
      
      <CheckBoxWrapper>
        <GlobalStyle/>
        <Checkboxes />  
        <StrengthMeter />
        <GenerateButton />
      </CheckBoxWrapper>
      </GeneratorWrapper>  
    </MainContext.Provider>
    </>
    
  );
}


const CheckBoxWrapper = styled.div`
  width: 540px;
  height: 528px;
  background-color: #24232C;
  margin-top: 20px;

  @media (max-width: 540px){
    width:343px;
    height: 423px;
    margin: auto;
    margin-top: 60px;
  }
`


const GeneratorWrapper = styled.div`
  width:540px;
  margin: auto;
  margin-top: 150px;


  @media (max-width: 540px){
    width:343px;
    margin: auto;
    margin-top: 60px;
  }
`


export default App;
