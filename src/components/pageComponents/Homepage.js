import React from 'react'
import styled from 'styled-components';
import { Section } from 'react-scroll-section'

const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  height: calc(100vh + 100px);
  @media(min-width: 768px) {
      height: 100vh;
  }
`

export default function Home() {
  return (
    <Section id="home">
    <HomeSection>
      <h1>Hello, I'm <span>Eric Montzka</span></h1>
      <h2>I'm a Chicago-based Web Developer</h2>
    </HomeSection>
    </Section>

  )
}