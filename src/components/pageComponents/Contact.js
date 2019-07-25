import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { gray } from '../UI/colors'

const FooterLink = styled.a`
    color: #fff;
    &:visited {
        color: #fff;
    }
    &:active {
        color: #fff;
    }
`

const ContactHeading = styled.h2`
    color: #fff;
     text-align: center;
    text-transform: uppercase;
    padding: 30px 0;
    // text-indent: 30px;
`

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 60px;
`

const Icon = styled(FontAwesomeIcon)`
    color: #fff;
    font-size: 50px;
    margin: 20px;
`

export default function Contact(props) {
    return (
        <div style={{backgroundColor: gray}}>
            <ContactHeading>Contact</ContactHeading>
            <IconContainer>
            <a  href="https://github.com/emontzka" target="_blank"><Icon icon={faGithub} /></a>
            <a  href="https://www.linkedin.com/in/eric-montzka/" target="_blank"><Icon  icon={faLinkedin} /></a>
            <a  href="mailto:emontzka@sbcglobal.net?subject=Response from portfolio site"><Icon icon={faEnvelope} /></a>
            </IconContainer>
            <footer style={{textAlign: 'center', color: '#fff'}}>
                © {new Date().getFullYear()}, Built with
                {` `}
                <FooterLink href="https://www.gatsbyjs.org">Gatsby</FooterLink>
            </footer>
        </div>
    )
}
