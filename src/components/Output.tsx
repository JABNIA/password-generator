import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import styled from "styled-components"
import { useDataContext } from "./context"
import copy from "copy-to-clipboard"


type password = {
    password: string
}



export default function Output(){
    const { register, handleSubmit, setValue, watch, formState: {errors}} = useForm<password>()
    const context = useDataContext()

    setValue("password", `${context.pass.value}`)

    function CopyToClipboard(){
        if(context.pass.value !== "password"){
            copy(context.pass.value)
        }
    }



    return (
    <div style={{position: "relative"}}>
    <Input {...register("password", {max: 20})} />
    <CopyButton onClick={CopyToClipboard}><svg width="21" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"/></svg></CopyButton>
    </div>
    )
}



const Input = styled.input`
    width: 540px;
    height: 80px;
    border: 0px;
    background-color: #24232C;
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
    line-height: 42.24px;
    text-align: left;
    display: block;
    padding-left: 20px;

  @media (max-width: 540px){
    width: 100%;
    height: 64px;
    font-family: JetBrains Mono;
    font-size: 24px;
    font-weight: 700;
    line-height: 31.68px;
    text-align: left;
  }
`


const CopyButton = styled.button`
    position: absolute;
    top: 30px;
    right: 40px;
    background-color: #24232C;
    border: 0px;
    fill: #A7FFAF;
    cursor: pointer;

    @media (max-width: 540px){
        width: 17px;
        height: 20px;
        top: 20px;
        right: 20px;
  }
`