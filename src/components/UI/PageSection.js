import React from 'react'
import styled from 'styled-components';
// import { Section } from 'react-scroll-section'

const Container = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const InnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // max-width: 800px;
    // justify-content: space-between;
    justify-content: center;
    width: 100%;
    padding: 0 20px;
`

const SectionTitle = styled.h2`
    text-transform: uppercase;
    color: black;
    margin-bottom: 40px;
    margin-top: 100px; // to deal with fixed header
    padding: 10px 0;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    text-indent: 30px;
    width: 100%;
    @media (min-width: 768px) {
        margin-top: 0;
    }
`

export default function PageSection(props) {
    // const titleId = props.title.replace(' ', '-').toLowerCase()
    return (
        
        <Container>
            <SectionTitle>{props.title}</SectionTitle>
            <InnerContainer>
                {props.children}
            </InnerContainer>
        </Container>
       
    )
}
