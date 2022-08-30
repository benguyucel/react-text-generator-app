import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { fetchData } from '../../redux/textSlice'
const HeaderSection = styled.section`
    padding: 2rem 1rem ;
    margin-bottom: .5rem;
    border-radius: .5rem;
    background-color: #474787;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(50, 50, 50, 0.75);
    -moz-box-shadow:    0px 3px 5px 0px rgba(50, 50, 50, 0.75);
    box-shadow:         0px 3px 5px 0px rgba(50, 50, 50, 0.75);
`
const ContentDiv = styled.div`
    display: flex;
    justify-content: ${props => props.contentType || "space-between"};
    gap:${props => props.gap || 0};
    align-items: center;
    color:#ff5252;
`
const MiniTitle = styled.h6`
    font-size: 1.1rem;
`
const BigTitle = styled.h1`
   font-size :2rem ;
`
const HrElement = styled.hr`
margin: 1rem 0;
border-top:.1rem dotted #ff793f;
`
const Input = styled.input`
    border-radius: .2rem;
    width: 50%;
    padding: .4rem 0;
    border:none;
    font-size: .9rem;
    font-weight: 500;
    text-indent: .5rem;
&:focus{
    outline: 1px solid #ff5252;
}
`
const InputGroup = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 100%;
`
const Label = styled.label`
font-size: 1rem;
color: #aaa69d;
margin-right: .5rem;
`
const SelectBox = styled.select`
border-radius: .2rem;
    width: 50%;
    padding: .4rem 0;
    border:none;
    font-size: .9rem;
    font-weight: 500;
    text-indent: .5rem;
    &:focus{
    outline: 1px solid #ff5252;
}
option{
    color: #ff5252;
    font-size: 1.1rem;
    &:hover{
        color: #fff;
        background-color: #ff5252;
    }
}

`
const Header = () => {
    const [paraf, setParaf] = useState(4)
    const [textType, setTextType] = useState("text")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData({ paraf, textType }))
    }, [paraf, textType, dispatch])
    return (
        <HeaderSection>
            <ContentDiv>
                <MiniTitle>
                    Yücel Bengü
                </MiniTitle>
                <BigTitle>REACT-REDUX TEXT GENERATOR APP</BigTitle>
            </ContentDiv>
            <HrElement />
            <ContentDiv contentType={"flex-end"} gap={'1rem'}>
                <InputGroup>
                    <Label>Paragraph:</Label>
                    <Input min={1} type={'number'} value={paraf} onChange={(e) => setParaf(e.target.value
                    )} />
                </InputGroup>
                <InputGroup>
                    <Label>Paragraph :</Label>
                    <SelectBox value={textType} onChange={(e) => setTextType(e.target.value)}>
                        <option value={"text"}>TEXT</option>
                        <option value={"html"}>HTML</option>
                    </SelectBox>
                </InputGroup>
            </ContentDiv>
        </HeaderSection>
    )
}

export default Header