import React, {useContext} from "react";
import { useDataContext } from "./context";
import styled from "styled-components";


const lowercaseLetters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  const uppercaseLetters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  const punctuationSymbols = [
    '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', 
    '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', 
    '_', '`', '{', '|', '}', '~'
  ];
  const numbers = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ];




export default function GenerateButton() {
    
    const context = useDataContext()
    let symbolsArr: string[] = []
    function Generator(){
        
        if(context.upper.state){
            symbolsArr = symbolsArr.concat(uppercaseLetters)            
        }
        if(context.lower.state){
          symbolsArr = symbolsArr.concat(lowercaseLetters)
          
        }
        if(context.numbers.state){
          symbolsArr = symbolsArr.concat(numbers)
          }
        if(context.symbols.state){
          symbolsArr = symbolsArr.concat(punctuationSymbols)
        }

        return assembleString(symbolsArr, context.passLength.value)
    }
    
    
    function assembleString(symbolPack: string[], length: number){
        let password: string = ""
        for(let i = 0 ; i < length ; i++){
            let randomLetter = symbolPack[Math.floor(Math.random() * symbolPack.length)]
            password = password + randomLetter;
        }
        return password;
    }
    
    


    return (
    <GeneratePasswordButton
        onClick={() => context.pass.setValue(Generator())}
    >
        <span className="btn-title">
            GENERATE
        </span>
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>
    </GeneratePasswordButton>
    )

}


        
  
  const GeneratePasswordButton= styled.button`
    width: 85%;
    height: 65px;
    background-color: #A4FFAF;
    color: #24232C;
    border: 0px;
    font-size: 18px;
    font-weight: 700;
    line-height: 23.76px;
    text-align: center;
    margin-left: 7.5%;
    cursor: pointer;

    .btn-title{
        margin-right: 25px;
    }
    
    
    @media (max-width: 540px){
      width: 90%;
      height: 54px;
      background-color: #A4FFAF;
      color: #24232C;
      font-family: JetBrains Mono;
      font-size: 16px;
      font-weight: 700;
      line-height: 21.12px;
      text-align: center;
      margin-left: 5%;
    }
`