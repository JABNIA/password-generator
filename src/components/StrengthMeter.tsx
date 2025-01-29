import React from "react"
import styled from "styled-components"
import { useDataContext } from "./context"


export default function StrengthMeter() {
    const context = useDataContext();
    let counter = 0;

    counter = context.lower.state ? counter + 1 : counter
    counter = context.upper.state ? counter + 1 : counter
    counter = context.numbers.state ? counter + 1 : counter
    counter = context.symbols.state ? counter + 1 : counter


    if(counter === 0){       
        return (
            <Wrapper>
            <p style={{color: "#817D92"}}>STRENGTH</p>
            <div className="scale-container">
                <p>SCALE</p>
                <div className="rect"></div>
                <div className="rect"></div>
                <div className="rect"></div>
                <div className="rect"></div>
            </div>
        </Wrapper>
    )
}else if(counter === 1 || context.passLength.value <= 5){
    return (
        <Wrapper>
        <p  style={{color: "#817D92"}}>STRENGTH</p>
        <div className="scale-container">
            <p>SCALE</p>
            <div className="too-weak"></div>
            <div className="rect"></div>
            <div className="rect"></div>
            <div className="rect"></div>
        </div>
    </Wrapper>
)
} else if(counter === 2 && context.passLength.value >= 5 || context.passLength.value <= 10){
    return (
        <Wrapper>
        <p  style={{color: "#817D92"}}>STRENGTH</p>
        <div className="scale-container">
            <p>SCALE</p>
            <div className="weak"></div>
            <div className="weak"></div>
            <div className="rect"></div>
            <div className="rect"></div>
        </div>
    </Wrapper>
)
} else if(counter === 3 && context.passLength.value >= 10 || context.passLength.value <= 15){
    return (
        <Wrapper>
        <p  style={{color: "#817D92"}}>STRENGTH</p>
        <div className="scale-container">
            <p>SCALE</p>
            <div className="medium"></div>
            <div className="medium"></div>
            <div className="medium"></div>
            <div className="rect"></div>
        </div>
    </Wrapper>
)
} else if(counter === 4 || context.passLength.value <= 20 && context.passLength.value >= 15){
    return (
        <Wrapper>
        <p style={{color: "#817D92"}}>STRENGTH</p>
        <div className="scale-container">
            <p>SCALE</p>
            <div className="strong"></div>
            <div className="strong"></div>
            <div className="strong"></div>
            <div className="strong"></div>
        </div>
    </Wrapper>
)
}else{
    return null
} 
}



const Wrapper = styled.div`
    width: 85%;
    height: 72px;
    background-color: #18171F;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    padding: 25px 20px;


    .scale-container{
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .rect{
        width: 10px;
        height: 28px;
        border: 2px solid #FFF;
    }

    .too-weak{
        width: 10px;
        height: 28px;
        border: 0px;
        background-color: #F64A4A;
    }

    .weak{
        width: 10px;
        height: 28px;
        border: 0px;
        background-color: #FB7C58;
    }

    .medium{
        width: 10px;
        height: 28px;
        border: 0px;
        background-color: #F8CD65;
    }

    .strong{
        width: 10px;
        height: 28px;
        border: 0px;
        background-color: #A4FFAF;
    }
    
    @media (max-width: 540px){
        width: 90%;
        height: 54px;
        margin: 10px auto 15px;
        padding: 17px 20px;
    }
`