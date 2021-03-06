import React from 'react'
import styled from 'styled-components';
import { Section } from 'react-scroll-section'
import {lightblue, medblue, darkblue, gray} from '../UI/colors'

const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${gray};
  color: #fff;
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
      <p style={{fontSize: '20px'}}>I'm a front end developer and musician based in Chicago.<br />I specialize in JavaScript, React and WordPress.</p>
    </HomeSection>
    </Section>

  )
}