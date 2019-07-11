import React from 'react'
import styled from 'styled-components';
import { Section } from 'react-scroll-section'

const Container = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SectionTitle = styled.h2`
    text-transform: uppercase;
    color: black;
    margin-bottom: 40px;
    padding: 10px 0;
    // background-color: yellow;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    text-indent: 30px;
    width: 100%;
`

export default function PageSection(props) {
    const titleId = props.title.replace(' ', '-').toLowerCase()
    console.log('title ',titleId)
    return (
        <Section id={titleId}>
        <Container>
            <SectionTitle>{props.title}</SectionTitle>
            {props.children}
        </Container>
        </Section>
    )
}
