import React, { useContext } from "react"
import styled from "styled-components"

import { useDataContext } from "./context"



export default function Checkboxes(){
    
    const generatorData = useDataContext()
    
    return (
        <>
        <div>
            <CharLenghtMeter>
                <p>Characters length</p>
                <h2 style={{color: "#A4FFAF"}}>{generatorData.passLength.value}</h2>
            </CharLenghtMeter>
            <PasswordLenghtMeter 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                generatorData.passLength.setValue(Number(e.target.value))
            }}
            value={generatorData.passLength.value} min={0} max={20} step={1}/>
        </div>
        <CheckboxWrapper>
                <label htmlFor='upperCase'>
                    <Checkbox 
                    type="checkbox" 
                    value='' 
                    name="upperCase" 
                    checked={generatorData.upper.state} 
                    className="check-box" 
                    onChange={generatorData.upper.event}/>
                    <span className="checkmark"> Include Uppercase Letters</span>
                </label>

               <label htmlFor='lowerCase'> 
                    <Checkbox 
                    type="checkbox" 
                    value="" 
                    className="check-box"
                    name="lowerCase" 
                    checked={generatorData.lower.state} 
                    onChange={generatorData.lower.event}/>
                    <span className="checkmark"> Include Lowercase Letters</span>
                </label>

                <label htmlFor='nums'>
                    <Checkbox type="checkbox" 
                    value=""  
                    className="check-box"
                    name="nums" 
                    checked={generatorData.numbers.state} 
                    onChange={generatorData.numbers.event}/>
                    <span className="checkmark"> Include Numbers</span>
                </label>

                <label htmlFor='symbols'>
                    <Checkbox type="checkbox" 
                    value=""  
                    className="check-box"
                    name="symbols" 
                    checked={generatorData.symbols.state} 
                    onChange={generatorData.symbols.event}/>
                    <span className="checkmark"> Include Symbols</span>
                </label>
        </CheckboxWrapper>
        </>
    )
}


const PasswordLenghtMeter = styled.input.attrs({type: "range"}) `
    appearance: none;
    -webkit-appearance: none;
    margin-left: 7.5%;
    width: 85%;
    height: 10px;
    outline: none;
    background-color: black;
    margin-top: 30px;


    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        background: #fff;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        border: 1px solid #FFF;
        cursor: pointer;
        margin-top: -10px;
   
    }
    &::-webkit-slider-thumb:active{
        background: #18171F;
        border: 2px solid #A4FFAF;
    }

    &::-webkit-slider-runnable-track{
        appearance: none;
        -webkit-appearance: none;
        height: 10px;
        background: ${(props) => props.value !== undefined ? `linear-gradient(to right,
        #a7ffaf ${Number(props.value) * 5}%,
        #000 ${Number(props.value)}% 100%)` : null} ;
    }
    &::-moz-range-thumb{
        -moz-appearance: none;
        background: #fff;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        border: 2px solid #ccc;
        cursor: pointer;
    }

    &::-moz-range-thumb:active{
        background: #18171F;
        border: 2px solid #A4FFAF;
    }

    &::-moz-range-progress{
        background-color: #a7ffaf;
        height: 10px;
    }


    @media (max-width: 540px){
        margin: 20px 5%;
        width: 90%;
        height: 6px;

        &::-webkit-slider-thumb{
        width: 28px;
        height: 28px;
    }
    &::-webkit-slider-runnable-track{
        height: 6px;
    }
    &::-moz-range-thumb{
        width: 28px;
        height: 28px;
    }

    &::-moz-range-progress{
        height: 6px;
    }

  }
`

const Checkbox = styled.input`
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #FFF;
    cursor: pointer;
    display: flex;
    align-items: flex-end; 
    justify-content: center;
    


    &:after{
        content: url('/images/icon-check.svg');
        fill: #FFF;
    }

    &:hover{
        border-color: #A4FFAF;
    }

    &:checked{
        background-color: #A4FFAF;
        border: 0px;
    }


`

const CheckboxWrapper = styled.div`
    width: 85%;
    height: 152px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    font-size: 18px;
    font-weight: 700;
    line-height: 23.76px;
    text-align: left;  
    margin-top: 30px;
    
    
    label {
        display: flex;
        gap: 15px;
        width: 100%;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        }
    .checkmark{
        font-family: JetBrains Mono;
    }

    @media (max-width: 540px){
        font-size: 14px;
        font-weight: 700;
        line-height: 23.76px;
        text-align: left;
        margin-top: 10px;
    }
`

const CharLenghtMeter = styled.div`
    width: 85%; 
    margin: auto; 
    padding: 20px 10px 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`